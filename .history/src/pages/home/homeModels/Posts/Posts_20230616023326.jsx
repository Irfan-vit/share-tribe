import './posts.css'
import useGetPosts from '../../../../backend/queryHooks/post/useGetPosts'
import useMutatePostsData from '../../../../backend/queryHooks/post/useMutatePosts'
import { useState } from 'react'
import Modal from '../../../../components/modal/Modal'
import ErrorBoundary from '../../../../ErrorBoundary'
const Posts = () => {
  const [modal, setShowModal] = useState(false)
  const { getPostsQuery, getPostQuery, getUserPostsQuery } = useGetPosts()
  console.log(getPostsQuery?.data)
  console.log(getUserPostsQuery?.data)
  console.log(getPostQuery?.data)
  const { deletePostsMutation, editPostsMutation } = useMutatePostsData()
  console.log(deletePostsMutation?.data, 'inside data')
  console.log(editPostsMutation?.data, 'edited data')
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
                <li
                  onClick={() => {
                    editPostsMutation.mutate({
                      _id: post._id,
                      content: 'i am a new post',
                    })
                  }}
                >
                  edit
                </li>
                <li
                  onClick={() => {
                    deletePostsMutation.mutate(post._id)
                  }}
                >
                  delete
                </li>
                <li
                  onClick={() => {
                    setShowModal(true)
                  }}
                >
                  show modal
                </li>
              </ul>
            </div>
          </div>
        ))}
      </div>
      {setShowModal ? (
        <Modal>
          <div>
            <button
              onClick={() => {
                setShowModal(false)
              }}
            >
              close Modal
            </button>
          </div>
        </Modal>
      ) : null}
    </>
  )
}

function PostsErrorBoundary

export default Posts
