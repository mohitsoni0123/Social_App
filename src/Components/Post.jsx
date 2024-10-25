import { LiaTrashSolid } from "react-icons/lia";
import {useContext} from 'react';
import {PostLists} from '../store/Post-list-store';
const Post = ({alldata, cardWiseInc}) =>{
	const {deletePost} = useContext(PostLists);
	const handleDelete = (id) => {
	 deletePost(id); 
	}

	return (
		<div onClick={() => cardWiseInc(alldata.id)} className="col-12 col-md-6 col-sm-6 py-2">
				<div className="card" style={{width: "18rem"}}>
				 <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-info">
				    {alldata.reactions.likes}+
				    <span className="visually-hidden">unread messages</span>
				  </span>
				  {/*<img src="..." className="card-img-top" alt="..." />*/}
				  <div className="card-body">
				    <h5 className="card-title">{alldata.title}</h5>
				    <p className="card-text">{alldata.body}</p>
				    {alldata.tags.map( (name,i) => (
				    <span key={i} className="badge bg-primary ms-1"> {name}</span>
				    ))}

				  </div>
				   <div className="card-footer">
				  <button onClick={() => handleDelete(alldata.id)} className="col-4 btn btn-danger"><LiaTrashSolid /></button>
				  </div>
				</div>
			</div>
		);
}

export default Post;