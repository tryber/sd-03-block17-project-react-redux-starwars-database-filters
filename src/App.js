import React from 'react';
import './App.css';
import store from './store/index';
import Table from './Components/Table';

import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={store}>
      <Table />
    </Provider>
  );
}

export default App;
