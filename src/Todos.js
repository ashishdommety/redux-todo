import React, {Component} from 'react';
// import { connect } from 'react-redux';

class Todos extends Component{
  render(){
    return(
      <div id='todos'>
        {this.props.todoItems.map((todos) =>
          <div className='each_todo'  key={this.props.todoItems.indexOf(todos)}>
            <p>
              {todos.text}
            </p>
            <button>x</button>
          </div>)}
      </div>
    )
  }
}

export default Todos;
