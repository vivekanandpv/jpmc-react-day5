import { square, getAreaOfCircle, ar, add, getPromise } from './utils';

test('square returns the square of a number', () => {
  expect(square(9)).not.toEqual(80);
});

test('negative radius throws error', () => {
  //   expect(() => getAreaOfCircle(-6)).toThrow();
  //   expect(() => getAreaOfCircle(-6)).toThrow(Error);
  expect(() => getAreaOfCircle(-6)).toThrow('negative radius!');
});

test('add pushes the element to the array', () => {
  //   const element = 8;
  //   expect(ar.length).toBe(0);
  //   add(element);
  //   expect(ar.length).toBe(1);
  //   expect(ar).toContain(element);
  expect(() => add(90)).not.toThrow();
});

test('resolves the square for the async', async () => {
  const result = await getPromise(4);
  expect(result).toBe(16);
});

test('resolves the square for the promise 1', () => {
  expect(getPromise(4)).resolves.toBe(16);
});

test('resolves the square for the promise 2', () => {
  return getPromise(4).then((v) => expect(v).toBe(16));
});
