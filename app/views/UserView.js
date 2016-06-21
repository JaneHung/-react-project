import React from 'react';
import ReactDom from 'react-dom';
import { Router, Route, Link,IndexRoute,hashHistory } from 'react-router';
import { connect} from 'react-redux';
import {getInfo} from '../actions/index.js';

var UserView = React.createClass({
	getInitialState: function(){
		return {
			name: 'Nini'
		}
	},
	componentWillMount: function(){
		this.props.dispatch(getInfo('admin','123456'));
	},
	render: function(){
		return (<div>
			<p>{this.state.name}</p>
			this a redux demo3333 {this.props.User.account}</div>);
	}
});
 function mapStateToProps(state){
	var {User} = state;
	return {User};

}
module.exports = connect(mapStateToProps)(UserView);