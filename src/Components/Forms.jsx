import {useContext, useRef,useEffect} from 'react';
import {PostLists} from '../store/Post-list-store';
import {useNavigate} from 'react-router-dom';
import {Form, redirect} from 'react-router-dom';
const Forms = () =>{
	// const navigate = useNavigate();
	// const {addPost} = useContext(PostLists);

	// const title = useRef('');
	// const description = useRef('');
	// const tags = useRef('');

// 	function hendleAdd(e){
// 		e.preventDefault();
// 	let dumb =	{
 // 	id:'4',
 // 	title:title.current.value,
 // 	body:description.current.value,
 // 	reaction:10000,
 // 	UserId:'',
 // 	tags:tags.current.value.split(/(\s+)/).filter( function(e) { return e.trim().length > 0; } ),
 // }

 		

 	// 	  let  titlePost = title.current.value;
	 // let  descriptionPost = description.current.value;
	 // let  tagsPost = tags.current.value;
	 // let userId = 5;
	 // console.log(titlePost)

	 //              title.current.value ="";
 	// 	 tags.current.value="";
     //          description.current.value="";

	 // 	let newlist = fetch('https://dummyjson.com/posts/add',{
	 // 		method:"POST",
	 // 		headers:{"content-Type":"application/json"},
	 // 		body: JSON.stringify({
	 // 			title:titlePost,
	 // 			userId: userId,
	// 		 	body:descriptionPost,
	// 		 	reactions:{likes:10000},
	// 		 	tags:tagsPost.split(/(\s+)/).filter( function(e) { return e.trim().length > 0; } )
			 	
	 // 		}),
	 // 	});
     //        let r =newlist.then(res => res.json());
     //        console.log(r);
     //         r.then( (r) => {
     //         addPost(r);
     //          navigate("/");
     //      });



	//}
	//ref={title}
	//ref={description}
	//ref={tags}
	return (
		<div className="row p-5" style={{width:'100%'}}>
		<Form method="post">
		  <div className="col-md-8 col-sm-12 mb-3">
		    <label htmlFor="exampleInputEmail1" className="form-label">Title </label>
		    <input name="title"  type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
		    
		  </div>
		  <div className="col-md-8 col-sm-12 mb-3">
		    <label htmlFor="exampleInputPassword1" className="form-label">description</label>
		    <input  name="body"   type="text" className="form-control" id="exampleInputPassword1" />
		  </div>
		   <div className="col-md-8 col-sm-12 mb-3">
		    <label htmlFor="exampleInputPassword1" className="form-label">Tages</label>
		    <input  name="tags"   type="text" className="form-control" id="exampleInputPassword1" />
		  </div>
		  <div className="col-md-8 col-sm-12 mb-3 form-check">
		    <input     type="checkbox" className="form-check-input" id="exampleCheck1" />
		    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
		  </div>

		  <button  type="submit" className="btn btn-primary">Submit</button>
		</Form>
		</div>
		// onClick={(e) =>hendleAdd(e)}
		);
}

export async function newAction (data){
	 // JSON.stringify({
	 // 			title:getdata.title,
	 // 			userId: 5,
	// 		 	body:getdata.description,
	// 		 	getdata.reactions:{likes:10000},
	// 		 	tags:getdata.tags.split(/(\s+)/).filter( function(e) { return e.trim().length > 0; } )
			 	
	 // 		}),
	const formdata  = await data.request.formData();
	const getdata = Object.fromEntries(formdata);
	getdata.userId =5;
	getdata.reactions ={likes:10000};
	getdata.tags.split(/(\s+)/).filter( function(e) { return e.trim().length > 0; } )
	 console.log(getdata);
	 fetch('https://dummyjson.com/posts/add',{
	 		method:"POST",
	 		headers:{"content-Type":"application/json"},
	 		body:JSON.stringify(getdata)
	 	})
         .then(res => res.json())
            // console.log(r);
          .then( (r) => {
            // addPost(r);
            console.log(r);
          });

          return redirect("/");
}

export default Forms;