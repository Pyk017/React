import { useNavigate } from "react-router-dom";

const TaskList = ({ tasks, markAsDone, deleteTask, keyword }) => {
  const navigate = useNavigate();

  tasks = tasks.filter((task) =>
    task.task_name.toLowerCase().includes(keyword)
  );

  return (
    <div className="todo-comp task-list">
      {tasks
        .sort((a, b) => b.id - a.id)
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
                  <span onClick={() => navigate(`/tasks/${task.id}`)}>
                    {task.task_name}
                  </span>
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
