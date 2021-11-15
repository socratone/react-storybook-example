import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText('값을 선택하세요.');
  expect(linkElement).toBeInTheDocument();
});
