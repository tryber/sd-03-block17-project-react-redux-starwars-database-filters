import React from 'react';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import store from './store';
import Table from './components/Table';
import SearchBar from './components/SearchBar';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <SearchBar />
        <Table />
      </div>
    </Provider>
  );
}

export default App;
