import { useState } from 'react';

import Former from './components/Form';
import { FormFunc } from './components/Form';

const App = () => {

  const [isLogedIn, setIsLogedIn] = useState(false);

  async function logIn(user) {
    // user={
    //   name: '',
    //   email: '',
    //   password: '',
    //   isVisible: false,
    // }
    const users = JSON.parse(
      localStorage.getItem('users') ?? '[]'
    );

    // const checkIncludes=!!users?.find(el=>el.email===user.email);
    const checkIncludes =
      users && users.find((el) => el.email === user.email)
        ? true
        : false;

    if (checkIncludes) {
      alert('Such contact is already created');
    } else {
      await localStorage.setItem(
        'users',
        JSON.stringify([
          ...(users ? users : []),
          {
            name: user.name,
            email: user.email,
            pasword: user.password,
          },
        ])
      );
      setIsLogedIn(true);
    }
  }

  const logOut = () => setIsLogedIn(false);

  return (
    <div className='App'>
      <h1>HELLO</h1>
      {isLogedIn ? (
        <FormFunc logOut={logOut} />
      ) : (
        <Former logIn={logIn} />
      )}
    </div>
  );
};

export default App;
