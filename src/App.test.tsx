import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const myAppText = screen.getByText(/My app/i);
  expect(myAppText).toBeInTheDocument();
});
