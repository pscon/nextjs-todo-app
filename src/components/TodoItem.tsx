import { Todo } from '@/types/todo';
import { Checkbox } from '../components/ui/Checkbox';
import { Button } from '../components/ui/Button';
import { useUpdateTodo, useDeleteTodo } from '../hooks/useTodos';
import { Trash2, Edit, Check, X } from 'lucide-react';
import { useState } from 'react';
import { Input } from '../components/ui/Input';

interface TodoItemProps {
  todo: Todo;
}

export function TodoItem({ todo }: TodoItemProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [editValue, setEditValue] = useState(todo.title);
  const updateTodo = useUpdateTodo();
  const deleteTodo = useDeleteTodo();

  const handleToggleCompleted = () => {
    updateTodo.mutate({
      ...todo,
      completed: !todo.completed
    });
  };

  const handleDelete = () => {
    deleteTodo.mutate(todo.id);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setEditValue(todo.title);
  };

  const handleSave = () => {
    if (editValue.trim()) {
      updateTodo.mutate({
        ...todo,
        title: editValue.trim()
      });
      setIsEditing(false);
    }
  };

  return (
    <div className={`flex items-center justify-between p-4 mb-2 border-b ${todo.completed ? 'bg-gray-50' : ''}`}>
      <div className="flex items-center gap-3 flex-1">
        <Checkbox
          checked={todo.completed}
          onCheckedChange={handleToggleCompleted}
          id={`todo-${todo.id}`}
          className='text-black cursor-pointer'
        />
        
        {isEditing ? (
          <div className="flex gap-2 flex-1 ">
            <Input
              value={editValue}
              onChange={(e) => setEditValue(e.target.value)}
              className="flex-1"
              autoFocus
            />
            <Button className='cursor-pointer ' size="icon" variant="ghost" onClick={handleSave}>
              <Check className="h-4 w-4 text-black" />
            </Button>
            <Button size="icon" variant="ghost" onClick={handleCancel}>
              <X className="h-4 w-4" />
            </Button>
          </div>
        ) : (
          <label
            htmlFor={`todo-${todo.id}`}
            className={`flex-1 cursor-pointer ${todo.completed ? 'line-through text-gray-500' : ' text-black'}`}
          >
            {todo.title}
          </label>
        )}
      </div>
      
      {!isEditing && (
        <div className="flex gap-1 ">
          <Button className='cursor-pointer ' size="icon" variant="ghost" onClick={handleEdit}>
            <Edit className="h-4 w-4 text-black" />
          </Button>
          <Button className='cursor-pointer ' size="icon" variant="ghost" onClick={handleDelete}>
            <Trash2 className="h-4 w-4 text-red-500" />
          </Button>
        </div>
      )}
    </div>
  );
}