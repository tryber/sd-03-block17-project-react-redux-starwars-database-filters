import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import Table from './components/Table';
import store from './store/store';
import Home from './components/Home';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <Home />
          <Table />
        </header>
      </div>
    </Provider>
  );
}

export default App;
