import './posts.css'
import useGetPosts from '../../../../backend/queryHooks/post/useGetPosts'
import useMutatePostsData from '../../../../backend/queryHooks/post/useMutatePosts'
const Posts = () => {
  const { getPostsQuery, getPostQuery, getUserPostsQuery } = useGetPosts()
  console.log(getPostsQuery?.data)
  console.log(getUserPostsQuery?.data)
  console.log(getPostQuery?.data)
  const { deletePostsMutation } = useMutatePostsData()
  return (
    <>
      <div className="posts-home">
        {getPostsQuery?.data?.map((post) => (
          <div className="post" key={post._id}>
            <div className="post-user">
              <div>
                <img
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt=""
                />
              </div>
              <h2>{post.username}</h2>
            </div>
            <div className="post-content">
              <p>{post.content}</p>
              <div>
                <img
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt=""
                />
              </div>
            </div>
            <div className="post-icons">
              <ul>
                <li>like</li>
                <li>dislike</li>
                <li>comment</li>
                <li>share</li>
                <li onClick={()}>delete</li>
              </ul>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}
export default Posts
