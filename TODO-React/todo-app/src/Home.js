const Home = () => {
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
        <div className="tasks">
          <div className="listing-icon">Listing Icon</div>
          <div className="task-name">Task 1</div>
          <div className="mark-as-done-icon">mark-as-done icon</div>
          <div className="delete-icon">delete-icon</div>
        </div>
        <div className="tasks">
          <div className="listing-icon">Listing Icon</div>
          <div className="task-name">Task 1</div>
          <div className="mark-as-done-icon">mark-as-done icon</div>
          <div className="delete-icon">delete-icon</div>
        </div>
        <div className="tasks">
          <div className="listing-icon">Listing Icon</div>
          <div className="task-name">Task 1</div>
          <div className="mark-as-done-icon">mark-as-done icon</div>
          <div className="delete-icon">delete-icon</div>
        </div>
        <div className="tasks">
          <div className="listing-icon">Listing Icon</div>
          <div className="task-name">Task 1</div>
          <div className="mark-as-done-icon">mark-as-done icon</div>
          <div className="delete-icon">delete-icon</div>
        </div>
      </div>
    </div>
  );
};

export default Home;
