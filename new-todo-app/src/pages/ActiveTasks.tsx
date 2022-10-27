import Heading from "../components/Heading";
import TaskList from "../components/TaskList";
import Footer from "../components/Footer";
import NoTask from "../components/NoTask";

const ActiveTasks = ({ tasks, updateTasks, deleteTasks }: any) => {
  return (
    <div className="container-box py-3 px-4 bg-white">
      <div className="container-header">
        <Heading header={"ACTIVE TASKS"} />

        {Boolean(tasks.length) && (
          <TaskList
            tasks={tasks}
            updateTasks={updateTasks}
            deleteTasks={deleteTasks}
          />
        )}

        {!Boolean(tasks.length) && <NoTask message={"No Active Tasks"} />}
      </div>
      <Footer tasks={tasks} page={"active"} />
    </div>
  );
};

export default ActiveTasks;
