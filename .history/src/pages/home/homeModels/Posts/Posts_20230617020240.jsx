import { Modal } from 'react-responsive-modal'
import 'react-responsive-modal/styles.css'
import './posts.css'
import useGetPosts from '../../../../backend/queryHooks/post/useGetPosts'
import useMutatePostsData from '../../../../backend/queryHooks/post/useMutatePosts'
import { useRef, useState } from 'react'
// import Modal from '../../../../components/modal/Modal'
import ErrorBoundary from '../../../../ErrorBoundary'
const Posts = () => {
  const [open, setOpen] = useState(false)
  const myRef = useRef(null)
  const [id, setId] = useState(null)
  const { getPostsQuery, getPostQuery, getUserPostsQuery } = useGetPosts()
  const {
    user: { username },
  } = JSON.parse(localStorage.getItem('authData'))
  console.log(username)
  // console.log(getPostsQuery?.data)
  // console.log(getUserPostsQuery?.data)
  // console.log(getPostQuery?.data)
  const { deletePostsMutation, editPostsMutation } = useMutatePostsData()
  // console.log(deletePostsMutation?.data, 'inside data')
  // console.log(editPostsMutation?.data, 'edited data')
  const bg = {
    overlay: {
      background: 'none',
    },
    modal: {
      position: 'absolute',
    },
  }
  const cn = {
    modal: 'modal-post',
    root
  }
  return (
    <>
      <div className="posts-home">
        {getPostsQuery?.data?.map((post) => (
          <div className="post" id={post._id} key={post._id}>
            <Modal
              open={open}
              onClose={() => setOpen(false)}
              center
              container={myRef.current}
              focusTrapped={false}
              styles={bg}
              classNames={cn}
            >
              <p
                onClick={() => {
                  editPostsMutation.mutate({
                    _id: post._id,
                    content: 'i am a new post',
                  })
                }}
              >
                edit
              </p>
              <p
                onClick={() => {
                  deletePostsMutation.mutate(post._id)
                }}
              >
                delete
              </p>
            </Modal>

            <div className="post-user">
              <div>
                <img
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt=""
                />
              </div>
              <div>
                <h2>{post.username}</h2>
                {username === post.username && (
                  <div ref={myRef}>
                    <span
                      onClick={() => {
                        setOpen(true)
                        setId(post._id)
                      }}
                    >
                      ...
                    </span>
                  </div>
                )}
              </div>
            </div>
            <div className="post-content">
              <p>{post.content}</p>
              <div>
                <img
                  src={
                    post.file
                      ? post.file
                      : 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
                  }
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
