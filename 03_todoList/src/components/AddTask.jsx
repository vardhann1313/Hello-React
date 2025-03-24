import { useState } from "react";

export default function AddTask({ onAdd }) {
  const [taskContent, setTaskContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskContent.trim()) {
      onAdd(taskContent);
      setTaskContent("")
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
      <input
        type="text"
        value={taskContent}
        onChange={(e) => setTaskContent(e.target.value)}
        placeholder="Add a task..."
        className="flex-grow p-2 border rounded-md"
      />
      <button type="submit" className="bg-blue-500 text-white px-3 py-2 rounded-md">
        Add
      </button>
    </form>
  );
}