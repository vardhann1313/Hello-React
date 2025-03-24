import { useState } from "react";
import TaskList from "./components/TaskList";
import AddTask from "./components/AddTask";

// icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClipboardList } from "@fortawesome/free-solid-svg-icons";

export default function App() {
  // Main task storage
  const [tasks, setTasks] = useState([]); 

  // Function for adding task in task storage
  const addTask = (content) => {
    const newTask = {
      id: Date.now(),
      content,
      isCompleted: false
    };
    setTasks([...tasks, newTask]);
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-4 bg-white shadow-lg rounded-lg">
      <h1 className="text-xl font-bold mb-4">
        <FontAwesomeIcon icon={faClipboardList} className="mr-2" />
        Todo List
      </h1>
      <AddTask onAdd={addTask} />
      <TaskList tasks={tasks} setTasks={setTasks} />
    </div>
  );
}
