
import { useState } from 'react';
import { useAddTodo } from '@/hooks/useTodos';
import { Input } from '../components/ui/Input';
import { Button } from '../components/ui/Button';
import { showSuccessToast } from './notifications/ToastNotification';

export function TodoForm() {
  const [title, setTitle] = useState('');
  const addTodo = useAddTodo();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title.trim()) {
      addTodo.mutate(title.trim(), {
        onSuccess: () => {
          setTitle('');
          showSuccessToast('Todo added successfully!');
        }
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mb-6">
      <Input
        type="search"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Add a new task..."
        className="flex-1"
      />
      <Button 
        type="submit" 
        disabled={!title.trim() || addTodo.isPending}
        className='bg-white text-black hover:bg-black border hover:text-white hover:border-white cursor-pointer  disabled:opacity-50'
      >

        Add Task
      </Button>
    </form>
  );
}