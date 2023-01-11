export const formatTime = (time) => (time < 10 ? `0${time}` : `${time}`);

export const calculateTime = (secondsElapsed) => {
  const seconds = secondsElapsed % 60;
  const minutes = Math.floor(secondsElapsed / 60) % 60;
  const hours = Math.floor(Math.floor(secondsElapsed / 60) / 60);
  return { hours, minutes, seconds };
};
