import { render, fireEvent } from '@testing-library/react';
import Todo from './Todo';

test('renders Todo component without errors', () => {
    const { container } = render(<Todo task="Test Task" removeTodo={() => {}} />);
    expect(container).toMatchSnapshot();
});

test('calls removeTodo function when X button is clicked', () => {
    const removeTodoMock = jest.fn();
    const { container, getByText } = render(
      <Todo task="Test Task" removeTodo={removeTodoMock} />
    );
    const removeButton = getByText('X');
  
    fireEvent.click(removeButton);
  
    expect(container).toMatchSnapshot();
});
