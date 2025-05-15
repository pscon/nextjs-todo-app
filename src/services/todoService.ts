
import { Todo } from '@/types/todo';

const STORAGE_KEY = 'todos';

export const todoService = {
  getTodos: async (): Promise<Todo[]> => {
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 300));
    const storedTodos = localStorage.getItem(STORAGE_KEY);
    return storedTodos ? JSON.parse(storedTodos) : [];
  },

  addTodo: async (title: string): Promise<Todo> => {
    await new Promise(resolve => setTimeout(resolve, 300));
    const newTodo: Todo = {
      id: Date.now().toString(),
      title,
      completed: false
    };

    const todos = await todoService.getTodos();
    const updatedTodos = [...todos, newTodo];
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedTodos));
    
    return newTodo;
  },

  updateTodo: async (updatedTodo: Todo): Promise<Todo> => {
    await new Promise(resolve => setTimeout(resolve, 300));
    const todos = await todoService.getTodos();
    const updatedTodos = todos.map(todo => 
      todo.id === updatedTodo.id ? updatedTodo : todo
    );
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedTodos));
    
    return updatedTodo;
  },

  deleteTodo: async (id: string): Promise<void> => {
    await new Promise(resolve => setTimeout(resolve, 300));
    const todos = await todoService.getTodos();
    const filteredTodos = todos.filter(todo => todo.id !== id);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(filteredTodos));
  }
};