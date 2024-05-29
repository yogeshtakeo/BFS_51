import { useEffect, useState } from "react";
import TaskListComponent from "./TaskList";

function Task() {
  const [todos, setTodos] = useState([]);
  const [todoValue, setTodoValue] = useState("");

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos"
      );
      const data = await response.json();
      setTodos([...data]);
    }

    fetchData();
  }, []);

  const updateTodo = (index, key, value) => {
    const copyTodo = todos;
    copyTodo[index][key] = value;
    setTodos([...copyTodo]);
  };

  const createTodo = (e) => {
    e.preventDefault();
    const copyTodo = todos;
    const addData = {
      userId: "Yogesh",
      title: todoValue,
      completed: false,
      id: length + 1,
    };

    // Array Method
    copyTodo.push(addData);
    setTodos([...copyTodo]);
  };

  return (
    <div className="py-10">
      <div className="flex justify-center flex-col place-items-center gap-4 p-4">
        <h1 className="font-bold text-3xl">Task List</h1>
        <form onSubmit={createTodo}>
          <input
            type="text"
            className=" border-2"
            onChange={(event) => setTodoValue(event.target.value)}
          />
          <button type="submit" className=" border-2">
            Submit
          </button>
        </form>
      </div>
      <ul className="flex flex-col gap-4 place-items-center">
        {todos.map((todo, index) => (
          <TaskListComponent
            key={index}
            title={todo.title}
            userId={todo.userId}
            completed={todo.completed}
            updateTodo={(key, value) => updateTodo(index, key, value)}
          />
        ))}
      </ul>
    </div>
  );
}

export default Task;
