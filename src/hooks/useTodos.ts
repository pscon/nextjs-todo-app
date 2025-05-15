import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { todoService } from '@/services/todoService';
import { Todo } from '../types/todo';

export const useTodos = () => {
  return useQuery({
    queryKey: ['todos'],
    queryFn: todoService.getTodos,
  });
};

export const useAddTodo = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: todoService.addTodo,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['todos'] });
    },
  });
};

export const useUpdateTodo = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: todoService.updateTodo,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['todos'] });
    },
  });
};

export const useDeleteTodo = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: todoService.deleteTodo,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['todos'] });
    },
  });
};