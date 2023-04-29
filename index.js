const test = async () => {
  const isHas = [1, 2, 3].includes(1);
  if (isHas) {
    return 0;
  }
  const res = await Promise.resolve(1);
  return res;
};

test();
