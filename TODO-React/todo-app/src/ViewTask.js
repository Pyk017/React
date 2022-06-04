import { useState } from "react";
import useFetch from "./useFetch";
import { useParams, useNavigate } from "react-router-dom";

const ViewTask = () => {
  const { id } = useParams();

  const navigate = useNavigate();

  const { tasks, isPending, error } = useFetch(
    "http://localhost:8000/tasks/" + id
  );

  let completedDate = null;
  const [isPendingDelete, setIsPendingDelete] = useState(false);

  if (tasks && tasks.task_completed_time) {
    completedDate = new Date(tasks.task_completed_time);
    let hours = completedDate.getHours() - 12;
    let suffix = hours >= 12 ? "PM" : "AM";

    const getDoubleDigit = (num) => `0${num}`.slice(-2);

    completedDate = `${getDoubleDigit(hours)}:${getDoubleDigit(
      completedDate.getMinutes()
    )} ${suffix} ${getDoubleDigit(completedDate.getDate())}/${getDoubleDigit(
      completedDate.getMonth()
    )}/${getDoubleDigit(completedDate.getFullYear())}`;
  }

  const deleteTask = (id) => {
    setIsPendingDelete(true);

    fetch(`http://localhost:8000/tasks/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        navigate("/");
        setIsPendingDelete(false);
        return res.json();
      })
      .then((data) => console.log("delete task's data :- ", data))
      .catch((err) => {
        setIsPendingDelete(false);
        console.log("Error in Updating data.");
      });
  };

  return (
    <div className="task-details flexbox">
      {error && <div className="alert-message failure">{error}</div>}
      {isPending && <div className="alert-message info"></div>}
      {!isPending && (
        <div className="task-details-container flexbox">
          <div className="task-detail flexbox">
            <label>Task Name: </label>
            <div className="task-name-d">{tasks.task_name}</div>
          </div>
          <div className="task-detail flexbox">
            <label>Task Description: </label>
            <div className="task-desc-d">{tasks.task_description}</div>
          </div>
          <div className="task-detail flexbox">
            <label>Task Date & Time: </label>
            <div className="task-datetime-d">{`${tasks.task_time} ${tasks.task_date}`}</div>
          </div>
          <div className="task-detail flexbox">
            <label>Task Status: </label>
            <div className="task-status-d">
              {tasks.task_status ? "Completed" : "Not Completed"}
            </div>
          </div>
          {completedDate && (
            <div className="task-detail flexbox">
              <label>Task Completion Time: </label>
              <div className="task-status-d">{completedDate}</div>
            </div>
          )}
          <div className="task-detail-btns flexbox">
            {!isPendingDelete && (
              <button
                className="deleteBtn"
                onClick={() => deleteTask(tasks.id)}
              >
                Delete
              </button>
            )}
            {isPendingDelete && (
              <button
                className="deleteBtn"
                onClick={() => deleteTask(tasks.id)}
              >
                Deleting...
              </button>
            )}
            <button className="backBtn" onClick={() => navigate("/")}>
              Back
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ViewTask;
