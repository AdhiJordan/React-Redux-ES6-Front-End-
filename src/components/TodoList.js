import React, { Component, PropTypes } from 'react'
import Todo from './Todo.js'

export default class TodoList extends Component {
   render() {
      console.log(this.props.todos);
      return (
         <ul>
            {this.props.todos.map(todo =>
               <Todo
               key = {todo.id}
               {...todo}
               />
            )}
         </ul>
      )
   }
}