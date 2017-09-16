import React, { Component } from 'react';
import { connect } from 'react-redux'
import uuid from 'node-uuid'
import {createSelector} from 'reselect'
import {bindDispatch} from '../common/util/redux'
import { browserHistory } from 'react-router';



const users = ['Adhithya', 'Brian', 'Steyn'];

const styles = {
	colorText: {
		color: '#000000'
	}

};
class ChatBox extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
       	user: '',
        input: '',
        message: ''
        };
      }


    inputValue(e) {
    	e.preventDefault();
      	this.setState({
      		input: e.target.value
      	});
      	
    }

	submitButton(e) {
		e.preventDefault();
		var sampleValue = null;
		var messageGetData = this.state.input;
		var message = this.state.message;
		this.setState({
			message: this.state.input
		});
		this.props.addTodo(message);
	}

	itemClicked (e) {
		this.setState({user: e});
	}

	render() {
		var content = null, listItems = null;
		const {messageDetails, appendMessage} = this.props;
		const {message} = this.state;

	    listItems = users.map((list) =>{
		 return <li  onClick={this.itemClicked.bind(this, list)}>{list}</li>;
		});
		
		return (
			<div>
			<div className="w3-row">
				<div className="w3-col w3-container  l12 w3-grey">
						<p className="text-center">ChatBox</p>
				</div>
				<div className="w3-col w3-container  l12 w3-white chatContent">
					<div className="w3-col s3 w3-green">
						<p>user chats</p>
						<div className="w3-col s12 w3-white chatUserContent">
							<ul value={users} className="w3-ul">
								{listItems}
							</ul>
						</div>
					</div>
					<div className="w3-col s9 w3-gray">
						<p>{this.state.user}</p>
						<div className="w3-col s12  w3-white chatSecondContent">

							{this.state.message}
						</div>

						<div className="w3-col w3-black">
						 	<form onSubmit={this.submitButton.bind(this)}>
						 		<input type="text" className="w3-col s11"
						 		style={styles.colorText}
						 		onChange={this.inputValue.bind(this)}
						 		placeholder="Enter the Conversations here..." />
						 		<button type="submit" className="buttonAlign">
						 		<span className="glyphicon glyphicon-envelope messageEnvelope" /></button>
						 	</form>
						</div> 

						</div>
				</div>
			</div>
			</div>
			

			);
	}
}

ChatBox = connect()(ChatBox)
 export default ChatBox;
