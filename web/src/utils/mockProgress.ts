/**
 * Mocks a progress bar for a given number of seconds.
 * @param seconds
 * @param onTick
 * @returns
 */
export const makeMockProgress = (
  seconds: number,
  onTick: (progress: number) => void
) => {
  const precision = 10;
  let resolve: any;
  let increment = 1 / precision;
  const promise = new Promise((r) => (resolve = r));
  const msPerSecond = 1000;
  const maxValue = 100;
  const intervalTime = (seconds * msPerSecond) / maxValue / precision;
  let progress = 0;

  const intervalId = setInterval(() => {
    progress += increment;
    onTick(progress);
    if (progress >= maxValue) {
      resolve && resolve();
      clearInterval(intervalId);
    }
  }, intervalTime);

  return {
    cancel: () => clearInterval(intervalId),
    complete: async () => {
      increment = 1;
      return promise;
    },
  };
};
