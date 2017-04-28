import React from 'react';
import ReactDom from 'react-dom';
import {Router, Route, Link, hashHistory} from 'react-router';

var LeaveMessage = React.createClass({
	initLayout: function(){
		
	},
	render: function(){
		
		var headView = (<header key='header' className="temp-head clearfix">
						<span className="leave-msg left">留言反馈</span>
						<span className="icon-switch right">广州</span>
						</header>);
		var content = (<div className='container-wrap'>TemplateListView</div>);
		var slide = (<div className="slide-wrap"><img src="/" /></div>);

		return <div>{headView}
				<div className='container-wrap'>{[slide]}</div>
			</div>;
	}
	
});
module.exports = LeaveMessage;