import createReducer from '../createReducer';
import * as types from '../../constants/ActionTypes';

import _us from 'underscore';
var inintailState = {
	name : 'jeson',
	vipNumb : '3123***2312',
	mileage : 500,
	account : 'admin',
	password : '1234555',
	b: 'i am from redux!'
};
var User = createReducer(inintailState,{
	['SET'](state,action){
		return {
			name : action.name,
			vipNumb : action.vipNumb,
			mileage : action.mileage
		}
	},
	['DEL'](state,action){
		return {
			name : 'none',
			vipNumb : 'none',
			mileage : 'none'
		}
	},
	 [types.GET_INFO](state,action){
	    	var book=_us.extend({},state);
	    	  book.account=action.account;
	    	  book.password=action.password;
	    	return book;
	    }
})
module.exports = User;

