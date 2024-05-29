import React, { useEffect, useState } from "react";

function Task() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos"
      );
      const data = await response.json();
      setTasks([...data]);
    }

    fetchData();
  }, []);

  return (
    <div>
      <>
        <h1>Task List</h1>
        <ul>
          {tasks.map((task) => (
            <li key={task.id}>{task.title}</li>
          ))}
        </ul>
      </>
    </div>
  );
}

export default Task;
