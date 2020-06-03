import React from 'react';
import { Provider } from 'react-redux';
import Table from './components/Table';
import store from './reducers/store';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <Table />
    </Provider>
  );
}

export default App;
