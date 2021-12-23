export const convertDateToDaysSince = (date) => {
  const oneDayUnix = 24 * 60 * 60 * 1000;
  const daysSinceUnix = new Date().getTime() - new Date(date).getTime();
  return Math.round(daysSinceUnix / oneDayUnix);
};
