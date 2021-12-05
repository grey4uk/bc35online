import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import s from './ToDoItem.module.css';
import { removeTodo } from '../../redux/todos/todosOperations';

const ToDoItem = ({ title, descr, date, priority, id }) => {
  const dispatch = useDispatch();

  return (
    <li className={s.toDoItem}>
      <p className={s.date}>{date}</p>
      <h3 className={s.title}>{title}</h3>
      <p className={s.descr}>{descr}</p>
      <p className={s.descr}>{priority}</p>
      <button
        onClick={() => dispatch(removeTodo(id))}
        className={s.toDoBtn}>
        Delete
      </button>
    </li>
  );
};

ToDoItem.propTypes = {
  title: PropTypes.string,
  descr: PropTypes.string,
  date: PropTypes.string,
  priority: PropTypes.string,
  id: PropTypes.string,
};

export default ToDoItem;
