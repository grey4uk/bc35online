import { useState } from "react";
import { useDispatch } from "react-redux";
import { v4 } from "uuid";
import s from "./ToDoForm.module.css";
import { addTodo } from "../../redux/todos/todosOperations";

const radio = {
  OPEN: "open",
  CLOSE: "close",
};

const formatDate = (date) => {
  const day = date.getDay();
  const month = date.getMonth();
  const year = date.getFullYear();
  return `${year}-${month + 1}-${day < 9 ? "0" + day : day}`;
};

const ToDoForm = ({ setIsChecked }) => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState("");
  const [descr, setDescr] = useState("");
  const [date, setDate] = useState(formatDate(new Date()));
  const [priority, setPriority] = useState("low");
  const [agree, setAgree] = useState(false);

  const handleChange = (e) => {
    const { name, value, checked } = e.target;
    switch (name) {
      case "title":
        setTitle(value);
        return;
      case "descr":
        setDescr(value);
        return;
      case "date":
        setDate(value);
        return;
      case "priority":
        setPriority(value);
        return;
      case "agree":
        setAgree(checked);
        setIsChecked(checked);
      default:
        return;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // if (!this.state.agree) return;
    const todo = { title, descr, date, priority, agree };
    // addToDo(todo);
    dispatch(addTodo(todo));
  };

  // for (let i = 0; i < 1000000000; i++) {}
  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <label className={s.label}>
        <span> Date </span>
        <input
          className={s.input}
          type="date"
          name="date"
          value={date}
          onChange={handleChange}
        />
      </label>
      <label className={s.label}>
        <span> Title </span>
        <input
          className={s.input}
          type="text"
          name="title"
          value={title}
          onChange={handleChange}
        />
      </label>
      <label className={s.label}>
        <span> Description </span>
        <input
          className={s.input}
          type="text"
          name="descr"
          value={descr}
          onChange={handleChange}
        />
      </label>
      <label>
        <span>Priority</span>
        <select name="priority" value={priority} onChange={handleChange}>
          <option value="low">Low</option>
          <option value="media">Media</option>
          <option value="high">High</option>
        </select>
      </label>
      <label className={s.label}>
        <input
          className={s.input}
          type="checkbox"
          name="agree"
          checked={agree}
          onChange={handleChange}
        />
        <span> Agree with our policy </span>
      </label>
      <button
        disabled={!agree}
        className={s.btn}
        style={{ backgroundColor: !agree && "red" }}
        type="submit"
      >
        Ok
      </button>
    </form>
  );
};

export default ToDoForm;

// const UseState = (initialValue) => {
//   let value = initialValue;
//   const setValue = prop => value = prop

//   return [value, setValue]
// }

// const [number, setNumber] = UseState(0)
