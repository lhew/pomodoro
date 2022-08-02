export const formattedSeconds = (ms: number) =>
  parseInt(`${ms / 60}`).toFixed().padStart(2, "0") + ":" + parseInt(`${ms % 60}`).toFixed().padStart(2, "0");
