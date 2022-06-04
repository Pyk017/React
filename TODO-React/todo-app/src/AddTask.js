import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddTask = () => {
  const [taskname, setTaskname] = useState("");
  const [taskdesc, setTaskdesc] = useState("");
  const [isPending, setIsPending] = useState(false);

  let navigate = useNavigate();

  const addNewTask = (e) => {
    e.preventDefault();
    setIsPending(true);
    const datetime = document.querySelector(".task-datetime-input").value;

    const [date, time] = datetime.split("T");

    let _date = date.split("-").reverse().join("/");

    let [hour, min] = time.split(":");

    let h = ("0" + (+hour - 12)).slice(-2);
    let _time = `${h}:${min} ${hour >= 12 ? "PM" : "AM"}`;

    const new_task = {
      task_name: taskname,
      task_description: taskdesc,
      task_date: _date,
      task_time: _time,
      task_status: false,
    };

    fetch("http://localhost:8000/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(new_task),
    })
      .then(() => {
        setIsPending(false);
        navigate("/");
      })
      .catch((err) => setIsPending(false));
  };

  return (
    <form className="new-task-container flexbox" onSubmit={addNewTask}>
      <div className="task-name-container flexbox">
        <label>Task Name: </label>
        <input
          type="text"
          placeholder="Enter Task Name..."
          className="task-name-input"
          value={taskname}
          onChange={(e) => setTaskname(e.target.value)}
          required
        />
      </div>
      <div className="task-desc-container flexbox">
        <label>Task Description:</label>
        <textarea
          placeholder="Describe your task..."
          className="task-desc-input"
          value={taskdesc}
          onChange={(e) => setTaskdesc(e.target.value)}
          cols="70"
          rows="5"
          required
        ></textarea>
      </div>
      <div className="task-datetime-container flexbox">
        <label>Date & Time: </label>
        <input type="datetime-local" className="task-datetime-input" required />
      </div>
      <div className="save-button flexbox">
        {isPending && (
          <button type="submit" className="submitBtn">
            Adding Task...
          </button>
        )}
        {!isPending && (
          <button type="submit" className="submitBtn">
            Submit
          </button>
        )}
        <button
          className="resetBtn"
          onClick={() => {
            document.querySelector(".new-task-container").reset();
            setTaskname("");
            setTaskdesc("");
          }}
        >
          Reset
        </button>
      </div>
    </form>
  );
};

export default AddTask;
