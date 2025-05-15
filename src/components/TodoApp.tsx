import { useState, useMemo } from 'react';
import { TodoForm } from './TodoForm';
import { TodoList } from './TodoList';
import { TodoFilter } from './TodoFilter';
import { useTodos } from '../hooks/useTodos';
import { TodoFilter as FilterType } from '../types/todo';

export function TodoApp() {
  const [filter, setFilter] = useState<FilterType>('all');
  const { data: todos = [], isPending } = useTodos();

  const counts = useMemo(() => {
    const active = todos.filter(todo => !todo.completed).length;
    const completed = todos.filter(todo => todo.completed).length;
    
    return {
      all: todos.length,
      active,
      completed
    };
  }, [todos]);

  if (isPending) {
    return <div className="flex justify-center py-12">Loading...</div>;
  }

  return (
    <div>
      <TodoForm />
      <TodoFilter filter={filter} setFilter={setFilter} counts={counts} />
      <TodoList todos={todos} filter={filter} />
    </div>
  );
}