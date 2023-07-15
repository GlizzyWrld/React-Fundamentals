import { render, fireEvent } from '@testing-library/react';
import NewBoxForm from './NewBoxForm';

test('renders NewBoxForm component without errors', () => {
  render(<NewBoxForm addBox={() => {}} />);
});

test('submits form and calls addBox function with correct values', () => {
  const addBoxMock = jest.fn();
  const { getByLabelText, getByText } = render(<NewBoxForm addBox={addBoxMock} />);
  const widthInput = getByLabelText('Width:');
  const heightInput = getByLabelText('Height:');
  const colorInput = getByLabelText('Background Color:');
  const addButton = getByText('Add Box');

  fireEvent.change(widthInput, { target: { value: '100' } });
  fireEvent.change(heightInput, { target: { value: '100' } });
  fireEvent.change(colorInput, { target: { value: 'red' } });
  fireEvent.click(addButton);

  expect(addBoxMock).toHaveBeenCalledWith({
    width: 100,
    height: 100,
    backgroundColor: 'red',
  });
});
