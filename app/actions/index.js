import * as types from '../constants/ActionTypes';

export function setInfo(name,vipNumb,mileage){
	return (dispatch, getState) => { 
    dispatch({
        type : 'SET',
				name : name,
				vipNumb : vipNumb,
				mileage : mileage
    });
  }
}

export function delInfo(){
	return (dispatch, getState) => { 
    dispatch({
        type : 'DEL'
    });
  }
}

export function links(type){
	return {
        type : type
    }
}
export function getBase(account,password){
	return(dispatch, getState) => {
		dispatch({
			type: types.GET_BASE,
			account: account,
			password: password
		});
	}
}
export function getInfo(account,password){
	return(dispatch, getState) => {
		dispatch({
			type: types.GET_INFO,
			account: account,
			password: password
		})
	}
}

export function change(){
	return(dispatch,getState) => {
		dispatch({
			type:types.CHANGE,
			b:'I am a redux arr!'
		})
	}
}