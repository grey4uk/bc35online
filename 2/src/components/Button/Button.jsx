import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { valueSelector } from '../../redux/selectors';
import { addOne } from '../../redux/value/valueReducer';

export const Button = () => {
  const dispatch = useDispatch();

  const value = useSelector((state) =>
    valueSelector(state)
  );

  const onClick = () => dispatch(addOne());

  return (
    <>
      <button type='button' onClick={onClick}>
        Press {value ? value : 0} times
      </button>
    </>
  );
};
