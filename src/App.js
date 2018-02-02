import React, { Component } from 'react';
import AddTodo from './components/addtodo';


class App extends Component {
  render() {
    return (
      <div className="container-fluid">
      <AddTodo/>
      </div>
    );
  }
}

export default App;
