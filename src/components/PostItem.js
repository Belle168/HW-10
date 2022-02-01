import './PostItem.css';


const PostItem = (props) =>{
return (
    <div className="post">
        <li>
            <div className='post-item' >
                <h4>{props.title}</h4>
                <h5>{props.id}</h5>
            </div>
            <img src={props.thumbnailUrl} />
        </li>
    </div>
)
}

export default PostItem;