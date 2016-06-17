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