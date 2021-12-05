import { useSelector } from 'react-redux';
import ToDoItem from '../ToDoItem/ToDoItem';
import s from './ToDoList.module.css';
import {
  loaderSelector,
  todosItemsSelector,
  filterToDoListSelector,
} from '../../redux/selectors';

const ToDoList = () => {
  const items = useSelector((state) =>
    todosItemsSelector(state)
  );
  const isLoading = useSelector((state) =>
    loaderSelector(state)
  );
  const todos = useSelector((state) =>
    filterToDoListSelector(state)
  );

  return console.log('RE-RENDER>>>>') ||
    items.length > 0 ? (
    <>
      {isLoading && <h1>Loading...</h1>}
      <ul className={s.toDoList}>
        {todos.map(({ id, ...item }) => (
          <ToDoItem key={id} {...item} id={id} />
        ))}
      </ul>
    </>
  ) : null;
};

export default ToDoList;
