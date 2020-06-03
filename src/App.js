import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import Table from './components/Table';
import store from './reducers/store';

function App() {
  return (
    <Provider store={store}>
      <Table />
    </Provider>
  );
}

export default App;
