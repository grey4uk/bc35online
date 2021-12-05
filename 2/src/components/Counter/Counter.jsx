import { useDispatch, useSelector } from 'react-redux';
import StepSelect from '../StepSelect/StepSelect';
import s from './Counter.module.css';
import {
  counterReset,
  counterIncrement,
  counterDecrement,
} from '../../redux/counter/counterActions';
import {
  counterSelector,
  stepsSelector,
} from '../../redux/selectors';

const Counter = () => {
  const dispatch = useDispatch();
  const { incr, decr } = useSelector((state) =>
    stepsSelector(state)
  );
  const counter = useSelector((state) =>
    counterSelector(state)
  );

  return (
    <div className={s.container}>
      <h1 className={s.title}>Counter</h1>
      <StepSelect title={'Select'} />
      <p className={s.count}>{counter}</p>
      <div className={s.btnsWrapper}>
        <button
          // onClick={() => counterDecrement(stepDecr)}
          onClick={() => dispatch(counterDecrement(decr))}
          className={s.btn}
          type='button'>
          -
        </button>
        <button
          onClick={() => dispatch(counterReset())}
          className={s.btn}
          type='button'>
          0
        </button>
        <button
          // onClick={() => counterIncrement(stepIncr)}
          onClick={() => dispatch(counterIncrement(incr))}
          className={s.btn}
          type='button'>
          +
        </button>
      </div>
    </div>
  );
};

// const mapStateToProps = (state) => ({
//   counter: state.counter, // 10
//   stepIncr: state.step.incr,
//   stepDecr: state.step.decr,
// });

// const mapDispatchToProps = (dispatch) => ({
//   counterReset: () => {
//     // console.log("counterReset");
//     const action = counterReset();
//     dispatch(action);
//   },
// });
// const mapDispatchToProps = {
//   counterResetProps: counterReset, // () => dispatch(counterReset())
//   counterIncrement: counterIncrement,
//   counterDecrement,
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Counter);
export default Counter;
