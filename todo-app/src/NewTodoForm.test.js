import { render, fireEvent } from '@testing-library/react';
import NewTodoForm from './NewTodoForm';

test('renders NewTodoForm component without errors', () => {
    const { container } = render(<NewTodoForm addTodo={() => {}} />);
    expect(container).toMatchSnapshot();
  });
  
  test('submits form and calls addTodo function with correct value', () => {
    const addTodoMock = jest.fn();
    const { container, getByPlaceholderText, getByText } = render(
      <NewTodoForm addTodo={addTodoMock} />
    );
    const taskInput = getByPlaceholderText('Enter task');
    const addButton = getByText('Add Todo');
  
    fireEvent.change(taskInput, { target: { value: 'Test Task' } });
    fireEvent.click(addButton);
  
    expect(addTodoMock).toHaveBeenCalledWith('Test Task');
    expect(container).toMatchSnapshot();
  });
  
