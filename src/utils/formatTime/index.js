const timeInMs = {
  hour: 60 * 60 * 1000,
  minute: 60 * 1000,
  second: 1000,
};

const units = {
  hours: 'h',
  minutes: 'min',
  seconds: 'sec',
};

const formatTime = (timestamp, fallback = 'Not finished') => {
  if (timestamp === undefined) return fallback;

  if (timestamp >= timeInMs.hour) {
    const hours = Math.floor(timestamp / timeInMs.hour);
    const minutes = Math.floor(timestamp % timeInMs.hour / timeInMs.minute);
    return `${hours} ${units.hours} ${minutes} ${units.minutes}`;
  }

  if (timestamp >= timeInMs.minute) {
    const minutes = Math.floor(timestamp / timeInMs.minute);
    const seconds = Math.floor(timestamp % timeInMs.minute / timeInMs.second);
    return `${minutes} ${units.minutes} ${seconds} ${units.seconds}`;
  }

  const seconds = Math.floor(timestamp / timeInMs.second);

  return `${seconds} ${units.seconds}`;
};

export default formatTime;
