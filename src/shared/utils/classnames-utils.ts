export const cn = <T>(classes: T[]): string => {
  return classes.filter((item) => typeof item === "string").join(" ");
};
