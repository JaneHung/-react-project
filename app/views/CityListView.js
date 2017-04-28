import React from 'react';
import ReactDom from 'react-dom';
import { Router, Route, Link,IndexRoute,hashHistory } from 'react-router';
import { connect} from 'react-redux';
import {getInfo,getList,citySelect} from '../actions/index.js';
import allCitys from '../api/citys.json';
import TopBar from '../components/TopBar';
import utils from '../components/utils';
var CityListView = React.createClass({

	getInitialState: function(){
		return {
			name: 'Nini',
			citys: allCitys,
			isFlag: false
		}
		
	},
	onChangePS: function(){
		var account = this.props.CityList.password;
		var password = this.props.CityList.password;
		 this.props.dispatch(getInfo(account,password));
	},
	keyOnChange: function(){
		var	 citys = [];
		var keyWord = this.refs.keyWord.value.trim();
		var reg = /^([\u4E00-\u9FA5]+，?)+$/;//输入中文
		if(keyWord.match(reg))
		{

			this.setState({
				isFlag: true
			})
		}else{
			this.setState({
				isFlag: false
			})
		}
		var isFlag =this.state.isFlag;
		if(keyWord==''){
			citys = allCitys;
		}/*else if(keyWord.length == 1 && !isFlag){
			for(var i=0; i<allCitys.length; i++){
				if(allCitys[i].sort === keyWord.toLocaleUpperCase()){
					citys.push(allCitys[i]);
				}	
			}	
		}*/
		else if(keyWord.length !== '' ){
			for(var i=0; i<allCitys.length; i++){
				if(allCitys[i].findCode.indexOf(keyWord)!==-1){ //包含查询
					citys.push(allCitys[i]);
				}	
			}	
		}
		this.setState({
			citys : citys
		})
	},
	clickHandler: function(e){
		var wrapContainer = this.refs.wrapContainer;
		var eId = e.target.getAttribute('data-id');
		var chartSort = this.refs[eId];
		if(chartSort.getAttribute('id') == eId ){
			var sortTop = chartSort.offsetTop;
			wrapContainer.scrollTop=sortTop;
		}
	},
	cityClickHandler: function(event){
		 var type=this.props.routeParams.type;
		 var city=event._targetInst._currentElement.key.split('-')[1];
		 this.props.dispatch(citySelect(city,type));
		 utils.back();
	},
	render: function(){
		var citys = this.state.citys;
		var items = [],
			citySort = '',
			itemNavs=[];
		for(var i=0; i<citys.length; i++){
			var key='city-'+citys[i].cityCode;
				if(citySort !== citys[i].sort){ //判断类型储存
					citySort = citys[i].sort;
					var key1='city-'+citys[i].sort;
					var itemNav =  <li key={citySort} data-id={citySort} onClick={this.clickHandler} className='sort'>{citySort}</li>;
					itemNavs.push(itemNav);
					var item = <li key={key1} ref={citySort} id={citySort}  className='sort'>{citySort}</li>;
						items.push(item);
				}
			var item = <li key={key} onClick={this.cityClickHandler}>{citys[i].airPortName}</li>;
			items.push(item);
			}
		return (<div><TopBar title="城市列表" hideBack={false} />
					<div className="search-wrap">
						<input type='text' key='keyWord' ref='keyWord' onKeyUp={this.onChangePS} placeholder={this.props.CityList.account} onChange ={this.keyOnChange} />
					</div>
				<div className='wrap-abs' ref='wrapContainer'>
					
					<ul className="city-list" id="city-list">
						{items}
					</ul>
				
				
				</div>
				<div className="sort-chart-bar">
					<ul className="bar-nav">
						{itemNavs}
					</ul>
				</div>		
			</div>);
	}
});
 function mapStateToProps(state){
	var {Book,CityList} = state;
	return {Book,CityList};

}
module.exports = connect(mapStateToProps)(CityListView);