import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { signOutAsync } from '../../redux/auth/authAsyncOperations';
import { firebase } from '../../utils/services/firebaseApi';

const btnStyle = {
  display: 'inline-block',
  padding: '10px 20px',
  backgroundColor: 'green',
  textDecoration: 'none',
  cursor: 'pointer',
  fontSize: '24px',
  borderRadius: '30%',
};

const Nav = () => {
  const { auth } = firebase;
  const dispatch = useDispatch();

  const handleSignOut = async () => {
    try {
      dispatch(signOutAsync(auth));
    } catch (error) {
      alert('Something went wrong. Check input data');
    }
  };
  return (
    <header style={{ position: 'fixed', width: '100%' }}>
      <nav className='nav'>
        <NavLink
          className='link'
          exact
          to='/'
          style={btnStyle}
          activeStyle={{ color: 'red' }}>
          Home
        </NavLink>
        <NavLink
          className='link'
          to='/todo'
          style={btnStyle}
          activeStyle={{ color: 'red' }}>
          ToDo
        </NavLink>
        <NavLink
          className='link'
          to='/counter'
          style={btnStyle}
          activeStyle={{ color: 'red' }}>
          Counter
        </NavLink>
      </nav>
      <button
        type='button'
        onClick={handleSignOut}
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '2%',
          position: 'absolute',
          top: '10%',
          right: '2%',
        }}>
        SIGN OUT
      </button>
    </header>
  );
};

export default Nav;
