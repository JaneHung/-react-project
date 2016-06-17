import React from 'react';
import {Link,hashHistory} from 'react-router';

var ProductBox;
ProductBox = React.createClass({
	getInitialState: function(){
		return {
			content:'this is a react demo & webpack & es2015'
		}
	},
	clickHandle: function(){
		alert('test test React!')
	},
    render: function () {
        return (
            <div className="productBox">
               {this.state.content}
               <div onClick={this.clickHandle}>click me dowm</div>
               <Link to="/demo/test01">To demo01</Link><br/>
                <Link to="/demo/test02">To demo02</Link><br/>
                  <Link to="/home">To /home</Link>
               
            </div>
        );
    }
});

module.exports = ProductBox;