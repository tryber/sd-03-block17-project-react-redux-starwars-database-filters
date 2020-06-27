import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import Table from './components/Table';
import store from './store/store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <Table />
        </header>
      </div>
    </Provider>
  );
}

export default App;
