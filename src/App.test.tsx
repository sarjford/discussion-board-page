import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders header element', () => {
  render(<App />);
  const headerElement = screen.getByTestId('header');
  expect(headerElement).toBeInTheDocument();
});

test('renders main elemet', () => {
  render(<App />);
  const headerElement = screen.getByTestId('main');
  expect(headerElement).toBeInTheDocument();
});

test('renders footer element', () => {
  render(<App />);
  const headerElement = screen.getByTestId('footer');
  expect(headerElement).toBeInTheDocument();
});
