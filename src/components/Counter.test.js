import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import Counter from './Counter';

afterEach(() => {
  cleanup();
});

test('render Counter on the h4 tag', () => {
  //  arrange
  render(<Counter />);
  //  act
  const h4Element = screen.getByRole('heading');
  //  assert
  expect(h4Element).toHaveTextContent('Counter: 0');
});

test('render increments counter when the increment button is clicked', () => {
  render(<Counter />);
  const incrementButton = screen.getByTestId('increment-button');
  const h4Element = screen.getByRole('heading');
  expect(h4Element).toHaveTextContent('Counter: 0');
  fireEvent.click(incrementButton);
  expect(h4Element).toHaveTextContent('Counter: 1');
});

test('render decrements counter when the decrement button is clicked', () => {
  render(<Counter />);
  const h4Element = screen.getByRole('heading');
  expect(h4Element).toHaveTextContent('Counter: 0');

  //   const incrementButton = screen.getByTestId('increment-button');
  //   const decrementButton = screen.getByTestId('decrement-button');

  //   fireEvent.click(incrementButton);
  //   fireEvent.click(decrementButton);
  const decrementButton = screen.getByTestId('decrement-button');

  fireEvent.click(decrementButton);

  expect(h4Element).toHaveTextContent('Counter: -1');
});
