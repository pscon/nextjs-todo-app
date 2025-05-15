'use client';

import { TodoApp } from '../components/TodoApp';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-[var(--background)] text-[var(--foreground)] transition-colors duration-300">
      <div className="flex-grow max-w-xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8 text-center">Task Manager</h1>
        <TodoApp />
      </div>

      <footer className="text-center py-4 text-sm border-t border-gray-300 dark:border-gray-700">
        Developed by <span className="font-medium"> <a
          href="https://www.linkedin.com/in/ekunola-paul-42712b1aa"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline dark:text-blue-400"
        >Ekunola Paul </a></span> © 2025
      </footer>
    </main>
  );
}