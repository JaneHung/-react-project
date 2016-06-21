import React from 'react';
import { Router, Route, hashHistory, Link } from 'react-router';
import { createStore } from 'redux';
import { Provider } from 'react-redux'; 
import { connect} from 'react-redux';
import configureStore from './stores/configureStore';  
import HomeView from "./views/HomeView";
import UserView from "./views/UserView";
import AppComponent from './components/productBox.js';
import TestView1 from './demo/test01.js';
import TestView2 from './demo/test02.js';
//ReactDOM.render(<AppComponent />, document.getElementById('content'));
/*render((<Router history={hashHistory}>
			<Router path='/' component={AppComponent}/>
	  </Router>), document.getElementById('content'));*/

const store = configureStore();
var RouterConfig=(
	<Provider store={store} key="provider">
		<Router history={hashHistory}>
				<Route path='/' component={AppComponent}/>
				<Route path="/home" component={HomeView}/>
				<Route path="/user" component={UserView}/>
				<Route path='/demo/test01'  component={TestView1} />
				 <Route path='/demo/test02'  component={TestView2} />
		  </Router>
	  </Provider>
	  );
module.exports=RouterConfig;