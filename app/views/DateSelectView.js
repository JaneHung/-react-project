import React from 'react';
import ReactDom from 'react-dom';
import { Router, Route, Link, IndexRoute, hashHistory} from 'react-router';
import {connect} from 'react-redux';
import utils from '../components/utils';
import {dateSelect,citySelect} from '../actions/index.js';

var DateSelectView = React.createClass({

	getToday: function(){
		this.now = new Date();
		this.year = this.now.getFullYear();
		this.month = this.now.getMonth();
		this.day = this.now.getDate();
	},
	getInitialState: function(){
		var newDate = new Date();
		return{
			year: newDate.getFullYear(),
			month: newDate.getMonth()+1,
			day: newDate.getDate()
		}
		console.log('year:'+this.state.year)
	},//上一个月
	clickLeftHandler: function(){
		var newMonth = this.state.month - 1;
		var year =  this.state.year;
		if(newMonth<1){
			year--;
			newMonth = 12;
		}
		/*this.state.month = newMonth;
		this.state.year = year;
		this.setState(this.state);*/
		console.log('left')
		this.setState({
			year : year,
			month: newMonth
		});
		this.handleFilterUpdate(year, newMonth);
	},//下一个月
	clickRightHandler: function(){
		var newMonth = this.state.month + 1;
		var year =  this.state.year;
		if(newMonth>12){
			year++;
			newMonth = 1;
		}
		this.setState({
			year : year,
			month: newMonth
		});
		this.handleFilterUpdate(year, newMonth);
		console.log('right')
	},
	handleFilterUpdate: function(filterYear, filterMonth){
		this.setState({
			year: filterYear,
			month: filterMonth
		});
	},
	//计算当年当月有多少天
	getMonthDays: function(){
		//根据月份获取当前天数
		var year = this.state.year,
		month = this.state.month;
		var temp = new Date(year, month, 0);
	//	console.log(temp.getDate())
		return temp.getDate();
	},
	getFirstDayWeek: function(){
		//根据年月返回当月1号是星期几
		var year = this.state.year,
		month = this.state.month;
		var dt = new Date(year + '/'+month+'/1'); //new Date(year,month,1)
		var Weekdays = dt.getDay();
	//	console.log(Weekdays)
		return Weekdays;

	},
	dateSelectandler: function(e){
		var days = new Array("日","一","二","三","四","五","六")//星期

		var type = this.props.routeParams.type;
		var dateTitle =this.refs.dateTitle.innerText;
		var day = e.target.innerText;
		
	//	var chartDate =dateTitle.replace(/[^0-9,]*/ig,"");
		var chartDate =dateTitle.match(/\d+/g);
		var dt = new Date(chartDate[0] + '/'+chartDate[1]+'/'+day+'');
		var date = dateTitle+day+'/周'+days[dt.getDay()];
	//	console.log(this.props.dispatch())
		this.props.dispatch(dateSelect(date,type));
		utils.back();
		console.log(dt.getDay())
		
	},

	render: function(){
		var arry1 = [],
			arry2 = [];
		var selectDate = this.dateSelectandler;
		var getDays = this.getMonthDays(),
			FirstDayWeek = this.getFirstDayWeek(),
			day = this.state.day; //当日几号
		for(var i=0; i<FirstDayWeek; i++){
			arry1[i]=i;
		//	console.log(arry1);
		}
		for(var i=0; i<getDays; i++){
			arry2[i]=(i+1);
		//	console.log(arry2);
		}	
		var node1 = arry1.map(function(item) {
			//var el = <td></td>;
			return <li  onClick={selectDate}></li>;
		})
		var cont1 = (<tr>{node1}</tr>);
		var node2 = arry2.map(function(item){
			//return (day==item) ? <tr><td style={{"background-color":"#ccc"}}>{item}</td></tr>:<tr><td>{item}</td></tr>
		  	return (day==item) ? <li style={{"background-color":"#ccc"}}  onClick={selectDate}>{item}</li>:<li onClick={selectDate}>{item}</li>

		});
		var cont2 = (<tr>{node2}</tr>);
/*<table className="date-table" id="caltable">
						<thead>
							<tr>
								<th className="weekday">日</th>
								<th>一</th>
								<th>二</th>
								<th>三</th>
								<th>四</th>
								<th>五</th>
								<th className="weekday">六</th>
							</tr>
						</thead>
						<tbody id="calendar">
						{cont1}{node2}
						</tbody>
					</table>*/
		return (<div className="calendar-main">
				<div className="calendar-head">
					<span className="date-prev" onClick={this.clickLeftHandler}></span>
					<span className="date-next" onClick={this.clickRightHandler}></span>
					<div className="date-title" id="dateTitle" ref="dateTitle" onClick={this.getFirstDayWeek}>
						{this.state.year}年{this.state.month}月
					</div>
				</div>
				<div className="date-container">
					
					<ul className="week-title clearfix">
						<li>日</li>
						<li>一</li>
						<li>二</li>
						<li>三</li>
						<li>四</li>
						<li>五</li>
						<li>六</li>
					</ul>
					<ul className="day-content clearfix">
						{node1}{node2}
					</ul>
				</div>
			</div>);
	}
});
function mapStateToProps(state){
	var {Book} = state;
	return {Book};

}
module.exports = connect(mapStateToProps)(DateSelectView);