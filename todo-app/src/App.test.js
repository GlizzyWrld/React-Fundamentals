import { render } from '@testing-library/react';
import App from './App';

test('renders App component without errors', () => {
  const {container} = render(<App />);
  expect(container).toMatchSnapshot();
});