import React from 'react';
import ReactDom from 'react-dom';
import {Router, Route, Link, hashHistory} from 'react-router';

var ShowTemplateList = React.createClass({
	initLayout: function(){
		
	},
	render: function(){
		var imgurl = require('../res/images/temp/ad01.jpg'),
			imgurl1 = require('../res/images/temp/msg103X103_01.png');
		var headView = (<header key='header' className="temp-head">
			中国区-广东-广州</header>);
		var content = (<div className='container-wrap'>TemplateListView</div>);
		var slide = (<div className="slide-wrap"><img src={imgurl} /></div>);
		var list = (<div className="other-list">
					<ul className="mt30 clearfix">
					<li><Link to='/leaveMessage'>
							<p className="img"><img src={imgurl1} /></p>
							<p>留言互动</p>
						</Link>
					</li>
					<li>
						<Link to='/'>
							<p className="img"><img src={imgurl1} /></p>
							<p>Test</p>
						</Link>
					</li></ul></div>)
		return <div>{[headView]}
				<div className='container-wrap'>{[slide,list]}</div>
			</div>;
	}
	
});
module.exports = ShowTemplateList;