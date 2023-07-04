import { useState } from 'react'
import { Modal } from 'react-responsive-modal'
import useMutateBookMarksData from '../../backend/queryHooks/bookMark/useToggleBookMarks'
import useMutateToggleLike from '../../backend/queryHooks/like/useToggleLike'
import useMutatePostsData from '../../backend/queryHooks/post/useMutatePosts'
import useGetUsers from '../../backend/queryHooks/user/useGetUsers'
import { useAuth } from '../../context/AuthContext'
import './post.css'
import PostCompose from '../../pages/home/homeModels/PostCompose/PostCompose'
import axios from 'axios'
const Post = ({ post }) => {
  const { authData } = useAuth()
  const { getUsersQuery, getUserQuery } = useGetUsers()
  const {
    addBookMarkMutation,
    deleteBookMarkMutation,
  } = useMutateBookMarksData()
  const {
    user: { username },
  } = JSON.parse(localStorage.getItem('authData'))
  const { deletePostsMutation, editPostsMutation } = useMutatePostsData()
  const { toggleLikeMutation, toggleDislikeMutation } = useMutateToggleLike()
  const [openPost, setOpenPost] = useState(false)
  const [currentPostId, setCurrentPostId] = useState(null)
  const removeBookmark = async (id) => {
    console.log(id, 'remove Id')
    const res = await axios.delete(`/api/users/remove-bookmark/${id}`, {
      headers: { authorization: authData.token },
    })
    console.log(res.data, 'remove data')
    return res.data
  }
  const addBookMarkApi = async (id) => {
    const res = await axios.post(
      `/api/users/bookmark/${id}`,
      {},
      {
        headers: { authorization: authData.token },
      },
    )
    console.log(res.data, 'add data')
    return res.data
  }
  return (
    <>
      <div className="post" id={post._id} key={post._id}>
        <div className="post-user">
          <div>
            <img
              src={
                getUsersQuery?.data?.find(
                  (user) => user.username === post.username,
                ).avatar
              }
              alt=""
            />
          </div>
          <div>
            <div>
              <h2>{post.username}</h2>
              <span>{` ${new Date(post.createdAt)
                .toDateString()
                .split(' ')
                .slice(1, 4)
                .join(' ')}`}</span>
            </div>
            {username === post.username && (
              <div className="post-settings">
                <button className="post-settings-button">...</button>
                <div className="post-settings-content">
                  <p
                    onClick={() => {
                      setOpenPost(true)
                      setCurrentPostId(post._id)
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
                  <a href="" className='span-full'></a>
                </div>
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
            <li
              onClick={() => {
                toggleLikeMutation.mutate(post._id)
              }}
            >
              like{post.likes?.likeCount ?? null}
            </li>
            <li
              onClick={() => {
                toggleDislikeMutation.mutate(post._id)
              }}
            >
              dislike
            </li>
            <li
              onClick={() => {
                addBookMarkMutation.mutate(post._id)
              }}
            >
              bookmark
            </li>
            <li
              onClick={() => {
                deleteBookMarkMutation.mutate(post._id)
              }}
            >
              remove-bookmark
            </li>
          </ul>
        </div>
        {currentPostId === post._id && (
          <Modal open={openPost} onClose={() => setOpenPost(false)} center>
            <PostCompose editData={post} close={setOpenPost} />
          </Modal>
        )}
      </div>
    </>
  )
}

export default Post
