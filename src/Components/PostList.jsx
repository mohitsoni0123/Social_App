import Post from './Post';
import logo from '../loading-gif.gif';
import {useContext,useEffect,useState} from 'react';
import {PostLists} from '../store/Post-list-store';
import {useLoaderData} from 'react-router-dom';
import {useSelector} from 'react-redux';
import {useDispatch} from 'react-redux';
import { counterAction} from '../store-redux/counter';
import { pAction} from '../store-redux/privacy';

const PostList = () =>{
	//getAllBulk
	// const {listPost,getAllBulk,showfatch} = useContext(PostLists);
	//console.log(listPost);
//-------------Redux without toolkit
	//const display = useSelector(store => store.counter);
	//const privacy = useSelector(store => store.privacy);
//with Toolkit--------------------------------------Redux with tool kit------
	const display = useSelector( (store) => store.counterSlicename);
	console.log(display)
	const pval = useSelector( (store) => store.privacySlice);
	const dispatch = useDispatch();

	const increament = () =>{
		// console.log(privacy)
		// 	dispatch({type:"INCREAMENT"});

		
		dispatch(counterAction.increment());
		let a = dispatch(pAction.parivacyF());
		console.log(pval);
		
	}

	const cardWiseInc = (i) =>{
		//console.log('hi@'+privacy)
		//	dispatch({type:"B_INCREAMENT" , payload:{Incval:i }});

		dispatch(
			counterAction.BulkIncrement({
				num:i, 
			})
		);
	}

	const listPost = useLoaderData();
	
    // function hendalgetand(getAllBulk){
        
     

    // }
	return (
		<div className="row p-5">
		<p className={pval?'text-danger':''} onClick={() => increament()} style={{cursor:"pointer"}}>Using Redux to State Maintain Inc {display.conterVal}</p>
		{/*{<img style={{width:"120px",height:"120px",margin:"0 auto"}} width="50"  height="200" src={logo} alt="Logo" />}*/}
		{/*{listPost ==0 && <button className="btn btn-warning col-6 col-sm-6" onClick={() => hendalgetand(getAllBulk)}>Load Post</button>}*/}
			{ listPost.map( (val,i) => (
					<Post cardWiseInc={cardWiseInc} key={val.id} alldata={{...val}} />
			) )}
		 
		</div>
		);
}

 export const postLoader = () =>{
 	try {
 		let newlist = fetch('https://dummyjson.com/posts')
            .then(res => res.json())
             .then( (r) => {
          //  console.log(r)
            return r.posts
            
          //  console.log('fetchRet')
          });
             return newlist;
           }
           catch(e){
           	console.log('Error')
           	return [];
           }
 }

export default PostList;