import React from 'react';
import { Provider } from 'react-redux';
import store from './store/index';
import Table from './components/Table';
import './App.css';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Table />
      </Provider>
    </div>
  );
}

export default App;
