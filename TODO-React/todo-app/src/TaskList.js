const TaskList = ({ tasks, markAsDone, deleteTask }) => {
  return (
    <div className="todo-comp task-list">
      {tasks
        .sort((a, b) => a.task_status - b.task_status)
        .map((task) => {
          return (
            <div
              className={task.task_status ? "tasks completed" : "tasks"}
              key={task.id}
            >
              <div className="flexbox left-side-task">
                <div
                  className="listing-icon"
                  onClick={() => markAsDone(task.id)}
                ></div>
                <div className="task-name">
                  <span>{task.task_name}</span>
                  <small>Date: {task.task_time + " " + task.task_date}</small>
                </div>
              </div>
              <div
                className="delete-icon"
                onClick={() => deleteTask(task.id)}
              ></div>
            </div>
          );
        })}
    </div>
  );
};

export default TaskList;
