import React from 'react';
import { Provider } from 'react-redux';
import Table from './components/Table';
import store from './store/store';
import './App.css';


class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Table />
      </Provider>
    );
  }
}
export default App;
