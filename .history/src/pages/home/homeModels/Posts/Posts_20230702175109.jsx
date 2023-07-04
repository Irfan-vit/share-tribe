import './posts.css'
import useGetPosts from '../../../../backend/queryHooks/post/useGetPosts'
import useGetUsers from '../../../../backend/queryHooks/user/useGetUsers'
import ErrorBoundary from '../../../../ErrorBoundary'

import Post from '../../../../components/post/Post'
import FilterBar from '../../../../components/filterBar/FilterBar'
const Posts = () => {
  const [filterBy, setFilterBy] = useState(null)
  const { getPostsQuery } = useGetPosts()
  const { getUsersQuery } = useGetUsers()

  const filteredPosts = (posts, filterType) => {
    console.log(posts, 'post')
    if (filterType) {
      if (filterType === 'Trending') {
        return posts?.sort((a, b) => b.likes.likeCount - a.likes.likeCount)
      } else if (filterType === 'Latest') {
        return posts?.sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt),
        )
      } else if (filterType === 'Oldest') {
        return posts?.sort(
          (a, b) => new Date(a.createdAt) - new Date(b.createdAt),
        )
      }
    } else {
      return posts
    }
  }
  const fp = filteredPosts(getPostsQuery?.data, 'Trending')
  return (
    <>
      <div className="posts-home">
        <FilterBar />
        {fp?.map((post) => (
          <Post key={post._id} post={post} />
        ))}
      </div>
    </>
  )
}

function PostsErrorBoundary(props) {
  return (
    <ErrorBoundary>
      <Posts {...props} />
    </ErrorBoundary>
  )
}

export default PostsErrorBoundary
