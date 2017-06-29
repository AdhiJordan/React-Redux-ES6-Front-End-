// Set up your root reducer here...
import { combineReducers } from 'redux';
import {routerReducer as routing} from 'react-router-redux'
import persons from './mainRegister'


export * from './mainRegister'


export default combineReducers({
 	persons,
 	
 	routing
 })