const minute = 60_000;
const second = 1_000;

const padTo2Digits = (num: number) => {
  return num.toString().padStart(2, "0");
};
export const millisToMinutesAndSeconds = (milliseconds: number) => {
  const minutes = Math.floor(milliseconds / minute);
  const seconds = Math.floor((milliseconds % minute) / second);
  const millis = Math.floor(milliseconds % second);

  return seconds === 60
    ? `${padTo2Digits(minutes + 1)}:00:000`
    : `${padTo2Digits(minutes)}:${padTo2Digits(seconds)}:${
        millis < 100 ? `0${millis}` : millis
      }`;
};
