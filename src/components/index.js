import React from "react";

const TodoApp = () => {
  const [allTasks, setAllTask] = React.useState([]); // react hooks.....

  const addNewTask = () => {
    var task = document.getElementById("task");
    if (task.value.length > 4) {
      setAllTask([task.value, ...allTasks]);
      task.value = "";
    } else {
      alert("Please Enter min 5 Char...");
    }
  };
  return (
    <div>
      <center>
        <h2>Manage Your Tasks</h2>
        <div style={{ alignItems: "center" }}>
          <input
            id="task"
            style={{
              border: "none",
              height: "20px",
              width: "200px",
              paddingTop: "0px",
            }}
            placeholder="Enter Your New Task."
          />
          <button
            style={{ border: "none", backgroundColor: "white" }}
            onClick={addNewTask}
          >
            <img
              style={{ width: "20px", height: "20px" }}
              src="http://pngimg.com/uploads/paper_plane/paper_plane_PNG61.png"
            />
          </button>
        </div>

        <div>
          {allTasks.map((task, index) => {
            return (
              <div
                style={{
                  height: "40px",
                  marginTop: "10px",
                  width: "400px",
                  backgroundColor: "#2C3E50",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  display: "flex",
                  color: "white",
                  paddingLeft: "10px",
                  borderRadius: "10px",
                }}
              >
                <p>
                  {index + 1} - {task}
                </p>
              </div>
            );
          })}
        </div>
      </center>
    </div>
  );
};

export default TodoApp;
