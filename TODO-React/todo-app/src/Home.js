import { useState } from "react";
import TaskList from "./TaskList";
import useFetch from "./useFetch";

const Home = () => {
  const { tasks, setTask, isPending, error } = useFetch(
    "http://localhost:8000/tasks"
  );

  const [keyword, setKeyword] = useState("");

  const handleSearch = (e) => {
    setKeyword(e.target.value.toLowerCase());
  };

  const markAsDone = (id) => {
    let targetTask;
    targetTask = tasks.find((task) => task.id === id);

    fetch(`http://localhost:8000/tasks/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        task_name: targetTask.task_name,
        task_description: targetTask.task_description,
        task_date: targetTask.task_date,
        task_time: targetTask.task_time,
        task_status: !targetTask.task_status,
        task_completed_time: new Date(),
      }),
    })
      .then((res) => {
        return res.json();
      })
      .catch((err) => {
        console.log("Error in Updating data.");
      });

    setTask(
      tasks.map((task) => {
        if (task.id === id) task.task_status = !task.task_status;
        return task;
      })
    );
  };

  const deleteTask = (id) => {
    setTask(tasks.filter((task) => task.id !== id));

    fetch(`http://localhost:8000/tasks/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => console.log("delete task's data :- ", data))
      .catch((err) => {
        console.log("Error in Updating data.");
      });
  };

  return (
    <div className="home-component">
      <div className="todo-comp header">
        <h3>TODO List</h3>
      </div>
      <div className="todo-comp searchbox">
        <input
          type="text"
          className="search-list"
          placeholder="Search Task ..."
          onChange={handleSearch}
        />
        <div className="search-icon"></div>
      </div>
      {error && <div className="alert-message failure">{error}</div>}
      {tasks && (
        <TaskList
          tasks={tasks}
          markAsDone={markAsDone}
          deleteTask={deleteTask}
          keyword={keyword}
        />
      )}
      {isPending && <div className="alert-message info"></div>}
    </div>
  );
};

export default Home;
