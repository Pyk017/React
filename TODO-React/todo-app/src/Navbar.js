const Navbar = () => {
  return (
    <div className="navbar flexbox">
      <div className="left-side flexbox">
        <h2 className="heading">TODO App</h2>
      </div>
      <div className="right-side flexbox">
        <div className="add-new-task">
          <span>Add New Task</span>
        </div>
        <div className="logout">
          <span>Logout</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
