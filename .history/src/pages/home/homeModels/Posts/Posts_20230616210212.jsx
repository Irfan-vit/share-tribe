import './posts.css'
import useGetPosts from '../../../../backend/queryHooks/post/useGetPosts'
import useMutatePostsData from '../../../../backend/queryHooks/post/useMutatePosts'
import { useState } from 'react'
import Modal from '../../../../components/modal/Modal'
import ErrorBoundary from '../../../../ErrorBoundary'
const Posts = () => {
  const [modal, setShowModal] = useState(false)
  const [id, setId] = useState(null)
  const { getPostsQuery, getPostQuery, getUserPostsQuery } = useGetPosts()
  // console.log(getPostsQuery?.data)
  // console.log(getUserPostsQuery?.data)
  // console.log(getPostQuery?.data)
  const { deletePostsMutation, editPostsMutation } = useMutatePostsData()
  // console.log(deletePostsMutation?.data, 'inside data')
  // console.log(editPostsMutation?.data, 'edited data')

  const getFileExtension = (filename) => {
    return filename
      .slice(((filename.lastIndexOf('.') - 1) >>> 0) + 2)
      .toLowerCase()
  }

  const isImage =
    selectedFile &&
    ['jpg', 'jpeg', 'png', 'gif'].includes(getFileExtension(selectedFile.name))
  const isVideo =
    selectedFile &&
    ['mp4', 'mov', 'avi'].includes(getFileExtension(selectedFile.name))

  return (
    <>
      <div className="posts-home">
        {getPostsQuery?.data?.map((post) => (
          <div className="post" id={post._id} key={post._id}>
            {modal && id === post._id ? (
              <Modal parent={post._id} state={modal} setState={setShowModal}>
                <div className="main-modal">
                  <h1>hello</h1>
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
                {/* <img
                  src={
                    post.file
                      ? post.file
                      : 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
                  }
                  alt=""
                /> */}
                {isImage && filePreview && (
                  <img src={filePreview} alt="Image Preview" />
                )}
                {isVideo && filePreview && (
                  <video controls>
                    <source src={filePreview} type={selectedFile.type} />
                    Your browser does not support the video tag.
                  </video>
                )}
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
                    setId(post._id)
                  }}
                >
                  show modal
                </li>
              </ul>
            </div>
          </div>
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
