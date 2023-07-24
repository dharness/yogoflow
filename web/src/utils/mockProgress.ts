/**
 * Mocks a progress bar for a given number of seconds.
 * @param seconds The number of seconds to mock progress for.
 * @param onTick A callback that is called every time the progress is updated.
 */
export const makeMockProgress = (
  seconds: number,
  onTick: (progress: number) => void
) => {
  // create a promise that can be resolved externally
  let resolve: () => void;
  const promise = new Promise<void>((r) => (resolve = r));

  // precision controls how many times the progress bar is updated
  // higher precision means more updates per second
  const precision = 10;
  let increment = 1 / precision;
  const msPerSecond = 1000;
  const maxValue = 100;
  const maxAutoValue = 85;
  const intervalTime = (seconds * msPerSecond) / maxValue / precision;
  let progress = 0;
  let canComplete = false;

  const intervalId = setInterval(() => {
    // wait at maxAutoValue until complete() is called
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
    // returns a promise so that the caller can await it while
    // progress quickly goes to 100%
    complete: async () => {
      canComplete = true;
      increment = 5 / precision;
      return promise;
    },
  };
};
