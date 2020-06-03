import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
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
