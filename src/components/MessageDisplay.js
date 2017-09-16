import React, { Component } from 'react';
import { connect } from 'react-redux'
import uuid from 'node-uuid'
import {createSelector} from 'reselect'
import {bindDispatch} from '../common/util/redux'
import { browserHistory } from 'react-router';



export default class MessageDisplay extends React.Component {

  constructor(props) {
        super(props);
        this.state = {
        
        };
      }

	render() {
		const {messageDetails, appendMessage} = this.props;
		
		return(
			<div>
				
				{this.props.appendMessage}
				
			</div>
			);
	}
}