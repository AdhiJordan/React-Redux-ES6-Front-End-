import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

const styles = {

nameText: {
        marginTop: 25,
        float: 'left',
        marginLeft: -55,
        width: 800,
},
emailText: {
        marginTop: 50,
        float: 'left',
        marginLeft: -80,
        width: 800,
},
phoneText: {
        marginTop: 50,
        float: 'left',
        marginLeft: -140,
        width: 800,
},
passwordText: {
        marginTop: 50,
        float: 'left',
        marginLeft: -103,
        width: 800,
},
  error: {
    position: 'absolute',
    top: 72,
    fontSize: 15,
  },

};

export default  class CartForm extends Component {
  onChange(e) {
              if(e.trim() === "")
              {
                    return ''
              }
  }
    render() {
           let {onChange, onClick, person, errors} = this.props
      return (

      <MuiThemeProvider>
              <div>
                  <p className='textCartName'>
                    Registration Form
                  </p>
    
                  <label className="textName">NAME</label>
                    <br />
                  <TextField
                        name="name"
                        floatingLabelText=" Enter Your Name"
                        style={styles.nameText}
                        onChange={onChange}
                        value={person.name}
                        errorText={errors.name}
                        errorStyle={styles.error}
                  />
                  <br />


                  <label className="textName">EMAIL ID</label>
                  <TextField
                        name="email"
                        type="email"
                        floatingLabelText="Enter Your Email"
                        style={styles.emailText}
                        onChange={onChange}
                        value={person.email}
                        errorText={errors.email}
                        errorStyle={styles.error}
                  />
                  <br />


                  <label className="textName">PHONE NUMBER</label>
                  <TextField
                        name="phone"
                        type="number"
                        floatingLabelText="Enter Your Phone Number"
                        style={styles.phoneText}
                        onChange={onChange}
                        value={person.phone}
                        errorText={errors.phone}
                        errorStyle={styles.error}
                  />
                  <br />


                  <label className="textName">PASSWORD</label>
                  <TextField
                        name="password"
                        type="password"
                        floatingLabelText="Enter Your Password"
                        style={styles.passwordText}
                        onChange={onChange}
                        value={person.password}
                        errorText={errors.password}
                        errorStyle={styles.error}
                  />
                  <br />

                  <div className="buttonDisplay">
                  <RaisedButton
                        label="Submit"
                        onClick={onClick}
                        labelColor="#fff"
                        backgroundColor="#00bfa5"
                  />
                  </div>

              </div>
      </MuiThemeProvider>
    );
  }
}

