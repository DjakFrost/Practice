import { render, screen } from '@testing-library/react';
import TestJSApp from './App';

test('renders learn react link', () => {
  render(<TestJSApp />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
