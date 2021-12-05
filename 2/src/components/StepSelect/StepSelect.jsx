import { useDispatch, useSelector } from 'react-redux';
import {
  changeStepIncr,
  changeStepDecr,
} from '../../redux/step/stepActions';
import { stepsSelector } from '../../redux/selectors';

const StepSelect = ({ title }) => {
  const dispatch = useDispatch();
  const { incr, decr } = useSelector((state) =>
    stepsSelector(state)
  );

  return (
    <>
      <h1>{title}</h1>
      <label>
        Decrement
        <select
          onChange={(e) => dispatch(changeStepDecr(e))}
          value={decr}>
          <option value='10'>10</option>
          <option value='15'>15</option>
          <option value='50'>50</option>
          <option value='100'>100</option>
        </select>
      </label>
      <label>
        Increment
        <select
          onChange={(e) => dispatch(changeStepIncr(e))}
          value={incr}>
          <option value='10'>10</option>
          <option value='15'>15</option>
          <option value='50'>50</option>
          <option value='100'>100</option>
        </select>
      </label>
    </>
  );
};

export default StepSelect;
