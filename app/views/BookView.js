import React from 'react';
import ReactDom from 'react-dom';
import { Router, Route, Link,IndexRoute,hashHistory } from 'react-router';
import { connect} from 'react-redux';
import {swapCity} from '../actions/index.js';
import TopBar from '../components/TopBar';
import utils from '../components/utils';

//import TabBar from '../components/TabBar';
var BookView = React.createClass({
	selectCity: function(type){
		console.log(type)
		utils.go("/cityList/"+type); //传递参数

	},
	//选择日期
	selectDate: function(type){
		utils.go("/dateSelect/"+type);
	},
	getInitialState: function(){
		return {
			//selected: this.props.selected
			selected: 0 ,//显示第一个tab
			hideStyle:{
				display:'none'
			},
			wdStyle:{
				width:'100%'
			}
		}
	},
	clickChange: function(){
		this.props.dispatch(swapCity());
		/*this.setState({
			cityFrom: this.state.cityTo,
   			cityTo: this.state.cityFrom
		});*/
	},
	clickHandle: function(event){
		this.setState({
			'selected': event.target.getAttribute('data-value')
		});
	},
	
	componentWillMount:function() {  
      		//this.props.dispatch(getInfo('admin','123456'));
    }, 
	render: function(){
		
		var items = [],
			contents = [];
			for(var i=0;i<2;i++){
			var selected = i == this.state.selected ? 'selected' :'';	
			var item =  <li className={selected} data-value={i}  onClick={this.clickHandle} >单程</li>
				items.push(item);
			
			var content = (<div className={selected}>
							<div className='row-wrap'>
					            <div className="label-l">出发</div>
					            <div className="label-r">到达</div>
					            <div className="select-l rStartCity selCity" onClick={()=>this.selectCity("cityFrom")}>{this.props.Book.cityFrom}</div>
					            <div className="select-r rEndCity selCity" onClick={()=>this.selectCity("cityTo")}>{this.props.Book.cityTo}</div>
					            <div className="swap" onClick={this.clickChange}></div>
							</div>

							<div className="row-wrap" style={this.state.hideStyle}>
					            <div className="label-l ">去程日期</div>
					            <div className="label-r">返程日期</div>
					            <div className="select-l roundGoTime" id="depCal" data-date="2016-06-28">
					                06月28日<span>周二</span>
					            </div>
					            <div className="select-r roundEndTime" id="arrCal" data-date="2016-06-30">
					                06月30日<span>周四</span></div>
					            <span className="days" id="days">3天</span>
					            <button class="serach-btn oneWaySubmit" hidefocus="hidefocus">搜 索</button>
					        </div>
					        <div className="row-wrap">
					            <div className="label-l" style={this.state.wdStyle}>出发日期</div>
					            <div className="select-l onewayTime " id="oneWayCal" onClick={()=>this.selectDate("dateFlightOff")} data-date="2016-06-28" style={this.state.wdStyle}>
					                {this.props.Book.dateFlightOff}
					            </div>
					            <button className="serach-btn oneWaySubmit" hidefocus="hidefocus">搜 索</button>
					        </div>
						  </div>);
		}
		return (<div><TopBar title="机票预订" hideBack={false} />
				<div className='wrap-abs top50' ref='wrapContainer'>
				
				<div className='tab-wrap'>
					<ul className="tab-nav clearfix">
						{items}
					</ul>
					<div className="content-wrap">
						{content}
					</div>
				</div>
				
				</div>
			</div>);
	}
});

//module.exports = BookView;
 function mapStateToProps(state){
	var {Book} = state;
	return {Book};

}
module.exports = connect(mapStateToProps)(BookView);