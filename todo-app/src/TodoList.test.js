import { render } from '@testing-library/react';
import TodoList from './TodoList';

test('renders TodoList component without errors', () => {
    const { container } = render(<TodoList />);
    expect(container).toMatchSnapshot();
});
