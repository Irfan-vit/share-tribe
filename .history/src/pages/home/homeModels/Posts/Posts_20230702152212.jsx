import './posts.css'
import useGetPosts from '../../../../backend/queryHooks/post/useGetPosts'
import useMutatePostsData from '../../../../backend/queryHooks/post/useMutatePosts'
import useMutateToggleLike from '../../../../backend/queryHooks/like/useToggleLike'
import useGetUsers from '../../../../backend/queryHooks/user/useGetUsers'
import useGetBookMarks from '../../../../backend/queryHooks/bookMark/useGetBookmarks'
import useMutateBookMarksData from '../../../../backend/queryHooks/bookMark/useToggleBookMarks'

// import Modal from '../../../../components/modal/Modal'
import ErrorBoundary from '../../../../ErrorBoundary'
import { useState } from 'react'
import Post from '../../../../components/post/Post'
const Posts = () => {
  const { getPostsQuery } = useGetPosts()
  const { getUsersQuery } = useGetUsers()
  const avatar = getUsersQuery?.data?.find(
    (user) => user.username === 'adarshbalika',
  ).avatar
  console.log(avatar, 'avatar')
  console.log(JSON.parse(localStorage.getItem('authData')))
  const [filterBy, setFilterBy] = useState(null)
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
  const fp = filteredPosts(getPostsQuery?.data, filterBy)
  console.log(getPostsQuery?.data, getUsersQuery?.data)
  return (
    <>
      <div className="posts-home">
        <div className="filter-bar">
          <h1>{filterBy}</h1>
          <div className="filter-options-container">
            <button className="toogle-filter-options">open</button>
            <div className="filter-options">
              <ul>
                <li>
                  <button
                    onClick={() => {
                      setFilterBy('Trending')
                    }}
                  >
                    trending
                  </button>
                  <button
                    onClick={() => {
                      setFilterBy('Latest')
                    }}
                  >
                    latest
                  </button>
                  <button
                    onClick={() => {
                      setFilterBy('Oldest')
                    }}
                  >
                    oldest
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
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
