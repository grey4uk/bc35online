import { Component, Fragment } from 'react';

const initialState = {
  name: '',
  email: '',
  password: '',
  isVisible: false,
};

class Form extends Component {
  state = {
    ...initialState,
  };

  handleChange =
    (name) =>
    ({ target: { value } }) => {
      this.setState((prevState) => {
        return {
          ...prevState,
          [name]: value,
        };
      });
    };

  setVisible = () =>
    this.setState({ isVisible: !this.state.isVisible });

  handleClick = async (e) => {
    e.preventDefault();
    await this.props.logIn(this.state);
    this.setState(initialState);
  };

  render() {
    const { name, email, password, isVisible } = this.state;
    const { handleChange, setVisible, handleClick } = this;
    return (
      <Fragment>
        <h2>FORM on ClassComponent</h2>

        <label>
          <h3>NAME</h3>
          <input
            name='name'
            value={name}
            autoFocus
            autoComplete='false'
            onChange={handleChange('name')}
          />
        </label>
        <label>
          <h3>Email</h3>
          <input
            name='email'
            value={email}
            autoComplete='false'
            onChange={handleChange('email')}
          />
        </label>
        <label>
          <h3>Pasword</h3>
          <input
            name='password'
            autoComplete='false'
            type={isVisible ? 'input' : 'password'}
            value={password}
            onChange={handleChange('password')}
          />
          <label>
            {!isVisible ? 'show' : 'hide'}
            <input type='checkbox' onChange={setVisible} />
          </label>
        </label>
        <button type='button' onClick={handleClick}>
          SUBMIT
        </button>
      </Fragment>
    );
  }
}

export default Form;
