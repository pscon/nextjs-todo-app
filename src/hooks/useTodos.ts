import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { todoService } from '@/services/todoService';
import { showSuccessToast } from '@/components/notifications/ToastNotification';


// custom hooks for todos (get list of all todos)
export const useTodos = () => {
    return useQuery({
        queryKey: ['todos'],
        queryFn: todoService.getTodos,
    });
};

// custom hooks for adding a particular todo 
export const useAddTodo = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: todoService.addTodo,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['todos'] });
        },
    });
};

// custom hooks for updating a particular todo
export const useUpdateTodo = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: todoService.updateTodo,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['todos'] });
            showSuccessToast('Todo updated successfully!');
        },
    });
};

// custom hooks for deleting a particular todo
export const useDeleteTodo = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: todoService.deleteTodo,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['todos'] });
            showSuccessToast('Todo deleted successfully!');
        },
    });
};