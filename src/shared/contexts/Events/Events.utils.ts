export const sorted = <T extends { timestamp: number }>(list: T[]): T[] => {
  return list.sort((a, b) => a.timestamp - b.timestamp);
};
