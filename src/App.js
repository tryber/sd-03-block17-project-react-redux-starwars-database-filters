import React from 'react';
import { Provider } from 'react-redux';
import store from './store/index';
import Table from './Components/Table';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <Table />
    </Provider>
  );
}

export default App;
