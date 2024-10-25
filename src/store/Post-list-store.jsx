import {createContext,useEffect,useState} from 'react';
import {useReducer} from 'react';
import { v4 as uuidv4 } from 'uuid';
export const PostLists = createContext({
	listPost:[],
	addPost: () => { },
	deletePost: () => { },
	//getAllBulk: () => { },
	showfatch:false
});

const ProcessReducer = (Current,action) =>{
	console.log(Current);
 let newval= Current;

 if(action.type=="DR"){
 		
 newval =	Current.filter((vall)  => vall.id!=action.payload.id? vall:'')
 	return  newval;
 	 
 }
 else if(action.type=="ALLR"){
 	return action.payload;
 }
 else{
 	
 	return [action.payload,...Current]
 }
 return newval;
}



const PostListsProvider = ({children}) =>{
// let PostBulkObj =[];
	
 


	

	

 let listPost = [{
 	id:'1',
 	title:'Sonu',
 	body:'sonu is chomy that is why he is so busy.',
 	reactions:0,
 	UserId:'',
 	tags:['simple','simplicity','gental']
 },
 {
 	id:'2',
 	title:'Mohit',
 	body:'Mohit is anxius that is why he is so innovative.',
 	reactions:1,
 	UserId:'',
 	tags:['simple','simplicity','gental']
 },
 {
 	id:'3',
 	title:'Ananya',
 	body:'Ananya is beloon that is why she is so tall and tuned.',
 	reactions:20000,
 	UserId:'',
 	tags:['clumsy','hot','glory']
 },
 {
 	id:'4',
 	title:'Anisha',
 	body:'Anisha is hot that is why she is so diffrent.',
 	reactions:10000,
 	UserId:'',
 	tags:['clumsy','chubby','sensitive']
 }];
const [postl, DispatchPost] = useReducer(ProcessReducer,[])

const addPost = (obj) =>{
	// console.log(obj); 
	const PostObj = {
		payload:obj,
		type:"AR",
	}

	 DispatchPost(PostObj);
}

const deletePost = (id) =>{
	console.log(uuidv4())
	if(window.confirm('Are You Sure')){
		const PostObj = {
		payload:{
			id:id
		},
		type:"DR",
	}
		DispatchPost(PostObj);
	}
}


const getAllBulk = (posts) => {
 	const PostBulkObj = {
		payload:posts,
		type:"ALLR",
	}

	  DispatchPost(PostBulkObj);
 }

 const [showfatch,setfatch] = useState(false);
	 
	 // useEffect(() =>{
	 // 	setfatch(true);
	 // //	console.log('fetchStart')
	 // 	const cntrllr = new AbortController();
	 // 	const signal = cntrllr.signal;
	 // 	let newlist = fetch('https://dummyjson.com/posts',{signal});
     //        let r =newlist.then(res => res.json());
     //         r.then( (r) => {
     //      //  console.log(r)
     //         getAllBulk(r.posts)
     //        setfatch(false);
     //      //  console.log('fetchRet')
     //      });
     //         // The use Effect Hookup Cleaner
     //         return () =>{
     //         	console.log('clearFetch');
     //         //	cntrllr.abort();
     //         }
     //       //  console.log('fetchEnd')
     //     },[])

 return (<PostLists.Provider value={{listPost:postl,addPost:addPost,deletePost:deletePost,showfatch:showfatch}}>{children}</PostLists.Provider>);
}
export default PostListsProvider;