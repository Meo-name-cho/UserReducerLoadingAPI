
import React, { useReducer } from 'react';
import './App.scss';
// import HomePage from './pages/HomePage'

const reducer = (state, action) => {
  switch (action) {
    case 'Tang':
      return state + 1;
    case 'Giam':
      return state - 1;
    case 'XOA_TAT_CA':
      return 0;
    default:
      return state;
  }
}

const reducer2 = (state, action) => {
  switch (action.type) {
    case 'GAN_GIA_TRI':
      return action.data;
    default:
      return state;
  }
}

const initState = {
  loading: false,
  data: [],
  error: null
}
const userReducer = (state, action) => {
  switch (action.type) {
    case 'GET_USER_REQUESRT':
      return {
        ...state,
        loading: true,
      }
    case 'GET_USER_SUCCESS':
      return {
        ...state,
        loading: false,
        data: action.data
      }
    case 'GET_USER_ERROR':
      return {
        ...state,
        data: [],
        error: action.data,
      }
    default:
  }
}

function App() {
  const [count, dispatch] = useReducer(reducer, 0)
  const [count2, dispatch2] = useReducer(reducer2, 0)
  const [user, userDispatch] = useReducer(userReducer, initState)

  const getUser = () => {
    userDispatch({
      type: 'GET_USER_REQUESRT',
    });
    setTimeout(() => {
      fetch('https://reqres.in/api/users')
        .then(res => res.json())
        .then(res => {
          userDispatch({
            type: 'GET_USER_SUCCESS',
            data: res
          });
        })
        .catch(err => {
          userDispatch({
            type: 'GET_USER_ERROR',
            data: err
          });

        })
    }, 2000);


  }
  return (
    <div>
      <button onClick={getUser} >GET USER</button>
      {user.loading ? <p>loading...</p> : <p>{JSON.stringify(user)}</p>}

      <p>count: {count}</p>
      <button onClick={() => dispatch('Tang')}>Tang</button>
      <button onClick={() => dispatch('Giam')}>Giam</button>
      <button onClick={() => dispatch('XOA_TAT_CA')}> Xoa het du lieu</button>

      <p>Count2: {count2}</p>
      <button onClick={() => dispatch2({
        type: 'GAN_GIA_TRI',
        data: 10
      })}>Gan gia tri</button>
    </div>
  );
}

export default App;
