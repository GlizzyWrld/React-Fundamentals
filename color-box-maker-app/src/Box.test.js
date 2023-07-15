import { render } from '@testing-library/react';
import Box from './Box';

test('renders Box component without errors', () => {
  render(<Box width={100} height={100} backgroundColor="red" />);
});
