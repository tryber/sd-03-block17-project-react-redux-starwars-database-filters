import React from 'react';
import { Provider } from 'react-redux';
import Table from './components/Table';
import store from './store';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <div class Name="App">
        <Table />
      </div>
    </Provider>
  );
}

export default App;
