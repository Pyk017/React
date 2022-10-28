import { useState } from "react";
import Heading from "../components/Heading";
import InputBox from "../components/InputBox";
import TaskList from "../components/TaskList";
import Footer from "../components/Footer";
import NoTask from "../components/NoTask";

import SkeletonPage from "../SkeletonPage";

const Home = ({ tasks, inputChanges, updateTasks, deleteTasks }: any) => {
  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, 1000);

  return (
    <div className="container-box py-3 px-4 bg-white">
      <div className="container-header">
        <Heading header={"ALL TASKS"} />
        <InputBox genericFunction={inputChanges} placeholder={"Add New ..."} />

        {loading && <SkeletonPage />}

        {!loading && Boolean(tasks.length) && (
          <TaskList
            tasks={tasks}
            updateTasks={updateTasks}
            deleteTasks={deleteTasks}
          />
        )}

        {!loading && !Boolean(tasks.length) && (
          <NoTask message={"No Tasks Available"} />
        )}
      </div>
      <Footer tasks={tasks} page={"all"} />
    </div>
  );
};

export default Home;
