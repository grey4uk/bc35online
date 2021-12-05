const changeTodos = (todos) =>
  Object.entries(todos).map(([id, data]) => ({ id, ...data }));

export const updateObjToArrMW = (store) => (next) => (action) => {
  if (action.type === "todo/getTodosSuccess") {
    const newPayload = changeTodos(action.payload);
    const newAction = { ...action, payload: newPayload };
    next(newAction);
    return;
  }
  next(action);
};
