import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import Table from './components/Table';
import store from './store/index';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <header className="App-header">
          <Table />
        </header>
      </Provider>
    </div>
  );
}

export default App;
