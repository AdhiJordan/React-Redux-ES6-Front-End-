import React, { Component } from 'react';
import { connect } from 'react-redux'
import uuid from 'node-uuid'
import {createSelector} from 'reselect'
import {bindDispatch} from '../common/util/redux'
import { browserHistory } from 'react-router';



export default class MessageBody extends React.Component {

  constructor(props) {
        super(props);
        this.state = {
        
        };
      }

	render() {
		const {onClick, onChange} = this.props;
		
		return(
			<div>
				
					<input type="text" placeholder="Enter your Conversations here" 
					className="inputDesign" onChange={onChange}/>
					<span onClick={onClick} className="glyphicon glyphicon-envelope messageEnvelope" />
				
			</div>
			);
	}
}