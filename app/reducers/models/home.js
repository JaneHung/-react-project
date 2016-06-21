import createReducer from '../createReducer';
import * as types from '../../constants/ActionTypes';
// 定义初始化状态，初始化状态是常量
var inintailState = {
			name : 'jeson',
			vipNumb : '3123***2312',
			mileage : 500,
			account : 'admin',
			password : '1234555'
	};
var Home = createReducer(inintailState,{
	['SET'](state,action){
		return {
			name : action.name,
			vipNumb : action.vipNumb,
			mileage : action.mileage
		}
	},
	['DEL'](state,action){
		return {
			name : 'none',
			vipNumb : 'none',
			mileage : 'none'
		}
	}
})
export default Home;