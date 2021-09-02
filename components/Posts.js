import { useCollection } from 'react-firebase-hooks/firestore'
import { db } from './Firebase'
import Post from './Post'
function Posts({posts }) {
    const [realtimepost, loading, error] = useCollection(
        db.collection('posts').orderBy('timestamp', 'desc')
    )
    return ( 
        <div>
            {realtimepost?
            realtimepost?.docs.map(post =>(
                <Post
                    key={post.id}
                    name={post.data().name}
                    message= {post.data().message}
                    email = {post.data().email}
                    timestamp = {post.data().timestamp}
                    image = {post.data().image}
                    postImage = {post.data().postImage}
                />
            )):(
                    posts.map((post) =>(
                        <Post
                        key={post.id}
                        name={post.name}
                        message= {post.message}
                        email = {post.email}
                        timestamp = {post.timestamp}
                        image = {post.image}
                        postImage = {post.postImage}
                    />
                    ))
                )
            
            }
        </div>
    )
}

export default Posts
