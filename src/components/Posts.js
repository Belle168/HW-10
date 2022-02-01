import PostItem from './PostItem'
import './Posts.css';

const Posts = (props) =>{
    return (
        <div >
            <ul className='posts'>
                {props.data.map((element)=>{
                    return (
                        <div key={element.id}>
                       <PostItem 
                       photoId={element.photoId}
                       id={element.id}
                       title={element.title}
                       thumbnailUrl={element.thumbnailUrl} 
                       />
                        </div>
                    )
                })}
            </ul>
        </div>
    )
}

export default Posts;