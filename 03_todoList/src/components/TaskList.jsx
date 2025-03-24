import { useState, useEffect } from "react";
import Task from "./Task";

export default function TaskList({ tasks, setTasks }) {

  // Storage for storing recent deleted task till 5 sec
  const [lastDeleted, setLastDeleted] = useState(null);

  // Timer ID to permanently delete deleted task
  const [undoTimer, setUndoTimer] = useState(null);

// Function to delete a task -----------------------------
  const handleDelete = (taskId) => {

    // Storing task before removing it from main task storage
    const deletedTask = tasks.find(task => task.id === taskId);
    setLastDeleted(deletedTask); 

    // Deleting from main task storage
    setTasks(tasks.filter(task => task.id !== taskId)); 

    // Permanently remove deleted task reference after 5 sec
    const timer = setTimeout(() => {
      setLastDeleted(null); 
    }, 5000);
    setUndoTimer(timer);
  };
// ------------------------------------------------------
// Undo function for restoring task ---------------------
  const undoDelete = () => {
    if (lastDeleted) {
      
      // Stop permanent deletion process
      clearTimeout(undoTimer);

      // Restoring task in main task storage
      setTasks(prevTasks => [...prevTasks, lastDeleted]); 
      setLastDeleted(null);
    }
  };
// -------------------------------------------------------
  return (
    <div>
      {tasks.map(task => (
        <Task key={task.id} task={task} onToggle={id =>
          setTasks(tasks.map(t => t.id === id ? { ...t, isCompleted: !t.isCompleted } : t))
        } onDelete={handleDelete} />
      ))}

      {lastDeleted && (
        <div className="bg-yellow-200 p-2 rounded-md mt-2 flex justify-between items-center">
          <span>Undo available till 5 sec</span>
          <button onClick={undoDelete} className="ml-2 bg-blue-500 text-white px-2 rounded">
            Undo
          </button>
        </div>
      )}
    </div>
  );
}