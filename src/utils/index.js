export const generateIncrementsOfN = (n) => {
  const min = 5;
  const max = n;
  const segment = 5;
  const list = [];

  if (n > min) {
    for (let i = min; i <= max; i += segment) {
      list.push(i);
    }
    return list;
  }
  return;
};
