export const square = (n) => n * n;

export const getAreaOfCircle = (r) => {
  if (r < 0) {
    throw new Error('negative radius!');
  }

  return 3.1415926535 * r * r;
};

export const ar = [];

export const add = (n) => {
  ar.push(n);
};

export const getPromise = (n) => {
  return Promise.resolve(n * n);
};
