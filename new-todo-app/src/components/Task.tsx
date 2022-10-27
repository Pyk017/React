const Task = ({ task, updateTasks, status, deleteTasks }: any) => {
  return (
    <li className="list-group-item">
      <div className="form-check">
        <input
          type="checkbox"
          className="form-check-input"
          onChange={(e) => updateTasks(e, task)}
          checked={status}
        />
        <label htmlFor="" className="form-check-label">
          {task.task_desc}
        </label>
        <img
          src=""
          alt="dustbin icon"
          className="delete-icon mx-4"
          onClick={(e) => deleteTasks(e, task)}
        />
      </div>
    </li>
  );
};

export default Task;
