function Input(props) {
  return (
    <input
      style={{
        padding: "1rem",
        outline: "none",
        background: "white",
        border: "none",
        borderRadius: "0.5rem",
        minWidth: "10rem",
      }}
      type={props.type}
      placeholder={props.placeholder}
    />
  );
}

export default Input;
