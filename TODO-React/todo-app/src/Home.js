import TaskList from "./TaskList";
import useFetch from "./useFetch";

const Home = () => {
  // const [tasks, setTask] = useState(null);

  // const [isPending, setIsPending] = useState(true);

  // const [error, setError] = useState(null);

  // useEffect(() => {
  //   console.log("Use effect runs");
  //   fetch("http://localhost:8000/tasks")
  //     .then((response) => {
  //       if (!response.ok) {
  //         throw new Error("Could not fetch the data");
  //       }
  //       return response.json();
  //     })
  //     .then((data) => {
  //       setIsPending(false);
  //       setTask(data);
  //       setError(null);
  //     })
  //     .catch((err) => {
  //       setError(err.message);
  //       setIsPending(false);
  //     });
  // }, []);

  const { tasks, isPending, error } = useFetch("http://localhost:8000/tasks");

  // const deleteTask = (id) => {
  //   setTask(tasks.filter((task) => task.id !== id));
  // };

  const markAsDone = (id) => {
    // setTask(
    //   tasks.map((task) => {
    //     if (task.id === id) task.task_status = !task.task_status;
    //     return task;
    //   })
    // );

    let targetTask = tasks.find((task) => task.id === id);

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
        task_status: true,
      }),
    })
      .then((res) => res.json())
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
        />
        <div className="search-icon"></div>
      </div>
      {error && <div>{error}</div>}
      {tasks && <TaskList tasks={tasks} markAsDone={markAsDone} />}
      {isPending && <div>Loading...</div>}
    </div>
  );
};

export default Home;
