import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import store from './store';
import Table from './components/Table';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Table />
      </div>
    </Provider>
  );
}

export default App;
