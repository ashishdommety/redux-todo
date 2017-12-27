import React, { Component } from 'react';
import Todos from './Todos';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import addTodo from './Actions';

class TodoContainer extends Component{
  constructor(props){
    super(props);
    // using local state just for input change.
    // Once the input is finalized, push the actual text to the global state
    this.state = {
      inputData: ''
    };
    // this.props.store.dispatch({type:'ADD_TODO', text:'Learn Redux'});
    this.props.addTodo('Learn mapDispatchToProps');
    // bind event to handle sending the action type back.
    this.addItem = this.addItem.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  addItem(event){
    // function that dispatches action with the text of the todo.
    this.props.addTodo(this.state.inputData);
    this.setState({
      inputData: ''
    })
  }

  onChange(event){
    this.setState({
      inputData: event.target.value
    });
  }

  render(){
    return(
      <div id='todoDiv'>
        <h1>To Do App</h1>
        <input type='text'
          name='content'
          value={this.state.inputData}
          onChange={this.onChange}/>
        <input type='button' name='button' value='add todo' onClick={this.addItem}/>
        <hr/>
        <Todos todoItems={this.props.state}/>
      </div>
    );
  }
};

/* mapStateToProps does two things -
  1) Specifies which slice of the state you want to provide
  2) And which component to provide it to
*/
// NOTE: You can read more about this here : https://learn.co/lessons/map-state-to-props-readme
const mapStateToProps = (state) => {
  return {state};
};

// NOTE: You can read more about this here -  https://learn.co/lessons/map-dispatch-to-props-readme
// the dispatch argument makes sure the action is dispatched and not that the action creator becomes just a prop that is passed down
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    addTodo: addTodo
  }, dispatch);
};

// connect listens for a change in the state or global store. It also returns a new component
export default connect(mapStateToProps, mapDispatchToProps)(TodoContainer);
