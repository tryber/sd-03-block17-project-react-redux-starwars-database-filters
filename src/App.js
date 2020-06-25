import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import store from './store/index'
import Table from './Components/Table';

function App() {
  return (
    <Provider store={store}>
      <Table />
    </Provider>
  );
}

export default App;
