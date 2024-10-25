//import {createStore} from 'redux';
import {createSlice ,configureStore} from '@reduxjs/toolkit';
import  PrivecySlices from './privacy';
import  counterSlices from './counter';
// From Redux ToolKit------------------------------

const store = configureStore({
	reducer:{
		counterSlicename:counterSlices.reducer,
		privacySlice:PrivecySlices.reducer
	}
})

export default store;
// ------ From Normal Redux----------------------
// const INIT_VAL = {
// 	counter:0,
// 	privacy:false
// } 
// const reducer = (store=INIT_VAL,Action) =>{
// 	let newStore = store;
// 	if(Action.type=="INCREAMENT"){
// 		return {...store , counter:store.counter+1};
// 	}
// 	else if(Action.type=="B_INCREAMENT"){
// 		return {...store , counter:store.counter+parseInt(Action.payload.Incval) , privacy: !store.privacy};
// 	}
// 	else{
// 		return newStore;
//     }
// }

// const store = createStore(reducer);

// export default store;