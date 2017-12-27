import React, { Component } from 'react';
import './App.css';
import TodoContainer from './TodoContainer';
import {Provider} from 'react-redux';
import store from './Store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <TodoContainer store={store}/>
        </div>
      </Provider>
    );
  }
}

export default App;
