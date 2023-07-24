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
  let resolve: () => void;
  let increment = 1 / precision;
  const promise = new Promise<void>((r) => (resolve = r));
  const msPerSecond = 1000;
  const maxValue = 100;
  const maxAutoValue = 85;
  const intervalTime = (seconds * msPerSecond) / maxValue / precision;
  let progress = 0;
  let canComplete = false;

  const intervalId = setInterval(() => {
    if (progress >= maxAutoValue && !canComplete) return;

    progress += increment;
    onTick(progress);
    if (progress >= maxValue) {
      clearInterval(intervalId);
      resolve && resolve();
    }
  }, intervalTime);

  return {
    cancel: () => clearInterval(intervalId),
    complete: async () => {
      canComplete = true;
      increment = 5 / precision;
      return promise;
    },
  };
};
