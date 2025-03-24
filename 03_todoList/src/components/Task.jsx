import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faCheckCircle, faCircle } from "@fortawesome/free-solid-svg-icons";

export default function Task({ task, onToggle, onDelete }) {
  return (
    <div className="flex items-center justify-between mb-2 bg-gray-100 p-2 rounded-md shadow-md">
      <div className="flex items-center gap-2">
        <FontAwesomeIcon
          icon={task.isCompleted ? faCheckCircle : faCircle}
          onClick={() => onToggle(task.id)}
          className={`cursor-pointer ${task.isCompleted ? "text-green-500": "text-gray-400"}`}
        />
        <span
          className={`${task.isCompleted ? "line-through text-gray-400" : ""}`}
        >
          {task.content}
        </span>
      </div>

      <button
        onClick={() => onDelete(task.id)}
        className="text-red-500 hover:text-red-700"
      >
        <FontAwesomeIcon icon={faTrash} />
      </button>
    </div>
  );
}
