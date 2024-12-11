import { TaskForm } from '@/components/TaskForm';
import { TaskGrid } from '@/components/TaskGrid';
import { useTasks } from '@/hooks/useTasks';

function App() {
  const { tasks, addTask, updateTask, deleteTask } = useTasks();

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-purple-950">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]" />
      <div className="container mx-auto py-8 px-4 relative">
        <h1 className="text-4xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-200 to-purple-400">
          Task Manager
        </h1>
        <div className="max-w-xl mx-auto mb-12">
          <TaskForm onSubmit={addTask} />
        </div>
        <TaskGrid
          tasks={tasks}
          onDelete={deleteTask}
          onStatusChange={(id, status) => updateTask(id, { status })}
        />
      </div>
    </div>
  );
}

export default App;