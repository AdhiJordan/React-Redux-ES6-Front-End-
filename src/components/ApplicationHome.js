import React, { Component } from 'react';
import { addTodo } from '../actions';
import {connect } from 'react-redux';




class ApplicationHome extends Component{
    constructor(props) {
        super(props);
        this.state = {
            dataMaintain: []
        };
    }

    formSubmit(e) {
      e.preventDefault();
      var dataMaintain = this.state.dataMaintain;
      var setData = this.refs.inputBoxResult.value;
      dataMaintain.push(setData);
      console.log("get in array", this.state.dataMaintain);
      this.props.addTodo(this.state.dataMaintain);
      this.refs.inputBoxResult.value = '';


    }

  render() {
    return (
        <div className="hey">
        <form onSubmit = {this.formSubmit.bind(this)}>
          <input type="text" className="" placeholder="Enter your Data here" ref="inputBoxResult"/>
          <button className="">SUBMIT</button>
          </form>
        </div>



    );
  }
}



const mapStateToProps = (state) => {
  console.log("in ApplicationHome", state);
  return {
      resultCame: state.getDataApplication,
  };
}

export default connect(mapStateToProps, {
  addTodo: addTodo,

})(ApplicationHome);


