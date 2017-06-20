import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Paper from 'material-ui/Paper';
import CartForm from './CartForm';
import {Tabs, Tab} from 'material-ui/Tabs';

const styles = {
  height: 200,
  width: 400,
  marginTop: 130,
  marginBottom: 10,
  marginRight: 130,
  float: 'left',
  textAlign: 'center',
  display: 'inline-block',
};
export default class Cart extends Component {
     constructor(props) {
        super(props);
        this.state = {
          value: 'a',
        };
         this.handleChange = this.handleChange.bind(this);
      }
   handleChange(value) {
      alert('value');
    this.setState({value: value});
       
    }
  render() {
    return (
    <MuiThemeProvider>
      <div>
      
        <Tabs> 
             <Tab label="Item One">
                     <div> 

          <p>            This is the first tab.          </p>   
                         </div>     
                          </Tab>  
                     <Tab label="Item 2">  
                           <div>       
                               <p>            This is the second tab          </p>  
                          </div>      </Tab>   
          </Tabs>

   <Paper style={styles} zDepth={5}>

      <CartForm />

      </Paper>
      
      </div>
      </MuiThemeProvider>
    );
  }
}
