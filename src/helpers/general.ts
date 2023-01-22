export const uid = () => crypto.randomUUID();

export const getFormattedDate = (timestamp: number) => {
  const date = new Date(timestamp);
  return date.toISOString().slice(0, 10);
};

export const getDateMinusDays = (date: Date, days: number) => {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate() - days); // e.g. 2022-09-29T07:00:00.000Z
};