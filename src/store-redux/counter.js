import {createSlice } from '@reduxjs/toolkit';
const counterSlices = createSlice({
	name:"counterSlicename",
	initialState:{conterVal:1},
	reducers:{
		increment: (state, action) =>{
			console.log("a:"+state.conterVal+" "+action);
			 state.conterVal+=1;
		},
		BulkIncrement: (state, action) =>{
			console.log(state.conterVal += action.payload.num);
			state.conterVal += action.payload.num;
		}
	}
});

export const counterAction = counterSlices.actions;
export default  counterSlices;

