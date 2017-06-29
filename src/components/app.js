import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Cart from './Cart.js';
import { connect } from 'react-redux'
import { addTodo } from '../actions/index.js'
import AddTodo from './AddTodo.js'
import TodoList from './TodoList.js'
import TodoApi from '../Api/TodoApi.js'
import uuid from 'node-uuid'
import {createSelector} from 'reselect'
import {bindDispatch} from '../common/util/redux'
import { browserHistory } from 'react-router';



 class App extends Component {
  constructor(props) {
        super(props);
        this.state = {
         
          persons: TodoApi.getPersons()

        };
        this.submitForm = this.submitForm.bind(this);
         
      }
      ComponentDidUpdate() {
        TodoApi.setPersons(this.state.persons);
        console.log(this.state.persons);
      }
      submitForm(person) {
        var newArr = this.state.persons;
    
      newArr.push(person);
   
      this.setState({
        persons: [
        ...this.state.persons,
        {
          persons: newArr
        }

        ]



       });

      let newData = {
        user: this.state.persons
      }
      this.props.actions.createUser(newData);
      
      
      }

  render() {

    return (
  
      <div>
      
      <Cart 
      submitForm={this.submitForm}
      persons={this.state.persons}

      />
        

      </div>
     
    );
  }
}

const selector = createSelector(
  state => state.persons,

  ( persons) => ({  persons })
)

export default connect(selector, bindDispatch)(App);
