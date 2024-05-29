function TaskListComponent(props) {
  return (
    <li className="flex gap-4 place-items-center border-2 p-2 rounded-md border-black">
      <div className="w-[10rem]">
        <h3 className="text-xl">{props.title}</h3>
      </div>
      <div>User: {props.userId}</div>
      <input
        type="checkbox"
        className="input"
        checked={props.completed}
        onChange={() => props.updateTodo("completed", !props.completed)}
      ></input>
    </li>
  );
}

export default TaskListComponent;
