const padTo2Digits = (num: number) => {
  return num.toString().padStart(2, "0");
};

export const millisToMinutesAndSeconds = (milliseconds: number) => {
  const minutes = Math.floor(milliseconds / 60000);
  const seconds = Math.floor((milliseconds % 60000) / 1000);
  const millis = Math.floor(milliseconds % 1_000);

  return seconds === 60
    ? `${padTo2Digits(minutes + 1)}:00:000`
    : `${padTo2Digits(minutes)}:${padTo2Digits(seconds)}:${
        millis < 100 ? `0${millis}` : millis
      }`;
};
