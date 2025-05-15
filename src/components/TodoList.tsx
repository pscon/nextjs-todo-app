
import { Todo, TodoFilter } from '@/types/todo';
import { TodoItem } from '../components/TodoItem';
import { useMemo } from 'react';

interface TodoListProps {
  todos: Todo[];
  filter: TodoFilter;
}

export function TodoList({ todos, filter }: TodoListProps) {
  const filteredTodos = useMemo(() => {
    switch (filter) {
      case 'active':
        return todos.filter(todo => !todo.completed);
      case 'completed':
        return todos.filter(todo => todo.completed);
      default:
        return todos;
    }
  }, [todos, filter]);

  if (filteredTodos.length === 0) {
    return (
      <div className="text-center py-8 text-gray-500 bg-white rounded-md shadow-2xl  ">
        No {filter !== 'all' ? filter : ''} tasks found
      </div>
    );
  }

  return (
    <div className="bg-white rounded-md shadow overflow-hidden">
      {filteredTodos.map(todo => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
}