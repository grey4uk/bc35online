import { createSelector } from '@reduxjs/toolkit';

export const tokenSelector = (state) => state.auth.token;

export const loadingSelector = (state) =>
  state.auth.loading;

export const loaderSelector = (state) => state.isLoading;

export const stepsSelector = (state) => state.step;

export const counterSelector = (state) => state.counter;

export const valueSelector = (state) => state.value;

const dirtyTodosItemsSelector = (state) =>
  state.todos.items;

export const todosFilterSelector = (state) =>
  state.todos.filter;

export const todosSelector = (state) => state.todos;

export const todosItemsSelector = createSelector(
  [dirtyTodosItemsSelector],
  (items) =>
    Object.entries(items).map((el) => ({
      ...el[1],
      id: el[0],
    }))
);

export const filterToDoListSelector = createSelector(
  [todosItemsSelector, todosFilterSelector],
  (items, filterValue) => {
    if (filterValue === 'all') return items;
    return items?.filter(
      (item) => item?.priority === filterValue
    );
  }
);

// export const filterToDoListSelector = (state) => {
//   const items = todosItemsSelector(state);
//   const filterValue = todosFilterSelector(state);
//   if (filterValue === 'all') return items;
//   return items?.filter(
//     (item) => item?.priority === filterValue
//   );
// };

// export const todosItemsSelector = (state) => {
//   const items = dirtyTodosItemsSelector(state);
//   return Object.entries(items).map((el) => ({
//     ...el[1],
//     id: el[0],
//   }));
// };
