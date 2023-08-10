export const getMinutesSeconds = (val: number) => {
  return (val / 1000000).toFixed(2).split(".").join(":");
};
