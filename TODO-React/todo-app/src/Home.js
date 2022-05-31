import React, { useState } from "react";

const Home = () => {
  const data = [
    {
      id: 1,
      task_name: "CNN Newsource",
      task_description:
        "Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.\n\nInteger tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.\n\nPraesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.",
      task_date: "27/06/2021",
      task_time: "10:02 PM",
      task_status: true,
    },
    {
      id: 2,
      task_name: "GPP",
      task_description: "In congue. Etiam justo. Etiam pretium iaculis justo.",
      task_date: "06/08/2021",
      task_time: "3:05 PM",
      task_status: false,
    },
    {
      id: 3,
      task_name: "Corporate Branding",
      task_description:
        "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.",
      task_date: "19/09/2021",
      task_time: "6:44 PM",
      task_status: false,
    },
    {
      id: 4,
      task_name: "RTO",
      task_description:
        "Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.\n\nFusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.",
      task_date: "21/05/2022",
      task_time: "11:05 PM",
      task_status: true,
    },
    {
      id: 5,
      task_name: "Basic HTML",
      task_description:
        "Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.\n\nCras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.\n\nProin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.",
      task_date: "17/05/2022",
      task_time: "4:18 AM",
      task_status: true,
    },
  ];

  const [tasks, setTask] = useState(data);

  const deleteTask = (id) => {
    setTask(tasks.filter((task) => task.id !== id));
  };

  const markAsDone = (id) => {
    setTask(
      tasks.map((task) => {
        if (task.id === id) task.task_status = !task.task_status;
        return task;
      })
    );
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
        />
        <div className="search-icon"></div>
      </div>
      <div className="todo-comp task-list">
        {tasks
          .sort((a, b) => a.task_status - b.task_status)
          .map((task) => {
            console.log(task.task_status);
            return (
              <div className={task.task_status ? "tasks completed" : "tasks"}>
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
    </div>
  );
};

export default Home;
