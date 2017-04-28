import React from 'react';
import ReactDom from 'react-dom';
import { Router, Route, Link,IndexRoute,hashHistory } from 'react-router';
import { connect} from 'react-redux';
import {setInfo, delInfo, links, getInfo} from '../actions/index.js';

import allCitys from '../api/citys.json';


var HomeView=React.createClass({
	componentWillMount: function(){
		this.props.dispatch(getInfo('admin','123456'));
		console.log(allCitys)
		
	},
	setInfo : function(){
		this.props.dispatch(setInfo('ken','1101110110','9000'));
	},
	delInfo : function(){
		this.props.dispatch(delInfo());
	},
	test : function(){
		this.props.dispatch(links(1));
	},
	render:function () {
		return (<div className="main" style={{flex:1}}>
					<header>
						<section className="top-bar row">
							<span className="menu"></span>
							<span>HNA</span>
							<span className="phone"></span>
						</section>
						<section className="info row">
							<span className="head-img"></span>
							<div>
							
							</div>
						</section>
						<section className="business row">
							<div className="row business-item">
								<span onClick={this.setInfo} className="book-ticket">{this.props.Home.account}{this.props.Home.test}预定机票设置信息</span>
								<span onClick={this.delInfo} className="vip-server">会员服务删除</span>
							</div>
							<div className="row business-item">
							
							</div>
						</section>
					</header>
					<section className="journey">
						<div className="journey-list row">{this.props.Home.name}您现在还没有行程<br />赶快添加行程吧</div>
						<div className="journey-operate row">
							<span className="add-journey">添加行程</span>
							<span className="history-journey">查看历史行程</span>
						</div>
					</section>
				</div>);
	}
});
function mapStateToProps(state) {
  var {Home, Links} = state ; 
    return {Home, Links};
}
export default connect(mapStateToProps)(HomeView);