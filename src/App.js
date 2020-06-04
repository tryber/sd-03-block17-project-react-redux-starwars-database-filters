import React from 'react';
import { Provider } from 'react-redux';
import Table from './components/Table';
import store from './store/index';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Provider store={store}>
          <Table />
        </Provider>
      </div>
    );
  }
}

export default App;
