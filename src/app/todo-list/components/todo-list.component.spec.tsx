import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { TodoListComponent } from './todo-list.component';

const mockTodo = [
  {
    id: 1,
    title: 'Task 1',
    description: 'Description 1',
    dueDate: '2022-01-01',
    isCompleted: false,
  },
  {
    id: 2,
    title: 'Task 2',
    description: 'Description 2',
    dueDate: '2022-01-02',
    isCompleted: true,
  },
];

describe('TodoListComponent', () => {
  it('should render', () => {
    const component = render(<TodoListComponent todo={mockTodo} />)
    expect(component).toMatchSnapshot()
  })

  it('should form is submitted when "タスクを追加" button click', async () => {
    const user = userEvent.setup();
    const onSaveMock = jest.fn();
    render(<TodoListComponent todo={mockTodo} onSave={onSaveMock} />);

    const titleInput = screen.getByLabelText(/title/i);
    const descriptionInput = screen.getByLabelText(/description/i);
    const dueDateInput = screen.getByLabelText(/dueDate/i);
    const addTaskButton = screen.getByRole('button', { name: 'タスクを追加' });

    await user.type(titleInput, '買い物に行く');
    await user.type(descriptionInput, '牛乳、卵を購入する');
    await user.type(dueDateInput, '2023-04-30');

    await user.click(addTaskButton);

    await waitFor(() => {
      expect(onSaveMock).toHaveBeenCalledTimes(1);
      expect(onSaveMock).toHaveBeenCalledWith({
        title: '買い物に行く',
        description: '牛乳、卵を購入する',
        dueDate: '2023-04-30',
      });
    });
  });

  // TODO: バリデーションのテストを追加する
});
