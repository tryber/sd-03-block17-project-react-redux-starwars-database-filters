import React from 'react';
import { Provider } from 'react-redux';
import DataTable from './components/DataTable';
import store from './store';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <DataTable />
      </div>
    </Provider>
  );
}

export default App;
