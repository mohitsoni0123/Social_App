import {createSlice} from '@reduxjs/toolkit';
const PrivecySlices = createSlice({
	name:"privacySlice",
	initialState:false,
	reducers:{
		parivacyF: (state, action) =>{
			state= !state;
			return state;
		}
	}
});

export const pAction = PrivecySlices.actions;

export default  PrivecySlices;