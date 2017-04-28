import React, { Component, PropTypes } from 'react';

class Counter extends Component{
	clickHandler(){
		console.log(234324)
	}
	render(){
		return (<div>This a es6!!!!<span onClick={this.clickHandler}>onclick</span></div>)
	}
}
export default Counter