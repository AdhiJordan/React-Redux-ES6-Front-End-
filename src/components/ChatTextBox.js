import React, { Component } from 'react';
import { connect } from 'react-redux'
import uuid from 'node-uuid'
import {createSelector} from 'reselect'
import {bindDispatch} from '../common/util/redux'
import { browserHistory } from 'react-router';


export default class ChatTextBox extends React.Component {


	render() {
const {name } = this.props;
console.log("entering into child");
console.log(this.props.name);
		return (

			<div>





			</div>
			

			);
	}
}

