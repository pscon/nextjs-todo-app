
import { TodoFilter as FilterType } from '@/types/todo';
import { Button } from '../components/ui/Button';

interface TodoFilterProps {
    filter: FilterType;
    setFilter: (filter: FilterType) => void;
    counts: {
        all: number;
        active: number;
        completed: number;
    };
}

export function TodoFilter({ filter, setFilter, counts }: TodoFilterProps) {
    return (
        <div className="flex justify-between items-center mb-6 flex-wrap gap-2 bg-blue-950 p-4 rounded-md shadow-sm">
            <div className="flex gap-2 cursor-pointer ">
                <Button
                    variant={filter === 'all' ? 'default' : 'outline'}
                    onClick={() => setFilter('all')}
                    size="sm"
                    className={`cursor-pointer ${filter === 'all' ? 'bg-white text-black' : ''}`}
                >
                    All ({counts?.all})
                </Button>
                <Button
                    variant={filter === 'active' ? 'default' : 'outline'}
                    onClick={() => setFilter('active')}
                    size="sm"
                    className={`cursor-pointer ${filter === 'active' ? 'bg-white text-black' : ''}`}
                >
                    Active ({counts?.active})
                </Button>
                <Button
                    variant={filter === 'completed' ? 'default' : 'outline'}
                    onClick={() => setFilter('completed')}
                    size="sm"
                    className={`cursor-pointer ${filter === 'completed' ? 'bg-white text-black' : ''}`}
                >
                    Completed ({counts?.completed})
                </Button>
            </div>
            <div className="text-sm text-gray-300">
                {counts?.active} active, {counts?.completed} completed
            </div>
        </div>
    );
}