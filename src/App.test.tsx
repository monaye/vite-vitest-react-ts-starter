import { it, expect } from 'vitest';
import { render } from '@testing-library/react';
import App from './App';

it('renders the heading with the correct class', () => {
  const { getByText } = render(<App />);
  const headingElement = getByText('Vite + React');
  expect(headingElement).toBeInTheDocument();
});
