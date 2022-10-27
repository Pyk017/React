import Heading from "../components/Heading";
import TaskList from "../components/TaskList";
import Footer from "../components/Footer";
import NoTask from "../components/NoTask";

const CompletedTasks = ({ tasks, updateTasks, deleteTasks }: any) => {
  return (
    <div className="container-box py-3 px-4 bg-white">
      <div className="container-header">
        <Heading header={"COMPLETED TASKS"} />

        {Boolean(tasks.length) && (
          <TaskList
            tasks={tasks}
            updateTasks={updateTasks}
            deleteTasks={deleteTasks}
          />
        )}

        {!Boolean(tasks.length) && <NoTask message={"No Completed Tasks"} />}
      </div>
      <Footer tasks={tasks} page={"completed"} />
    </div>
  );
};

export default CompletedTasks;
