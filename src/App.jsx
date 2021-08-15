
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

function App() {
  const [count, dispatch] = useReducer(reducer, 0)
  return (
    <div>
      <p>count: {count}</p>
      <button onClick={()=> dispatch('Tang')}>Tang</button>
      <button onClick={()=> dispatch('Giam')}>Giam</button>
      <button onClick={()=> dispatch('XOA_TAT_CA')}> Xoa het du lieu</button>

    </div>
  );
}

export default App;
