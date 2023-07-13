import { useState } from 'react'
import { Modal } from 'react-responsive-modal'
import useMutateBookMarksData from '../../backend/queryHooks/bookMark/useToggleBookMarks'
import useMutateToggleLike from '../../backend/queryHooks/like/useToggleLike'
import useMutatePostsData from '../../backend/queryHooks/post/useMutatePosts'
import useGetUsers from '../../backend/queryHooks/user/useGetUsers'
import useGetBookMarks from '../../backend/queryHooks/bookMark/useGetBookmarks'
import { useAuth } from '../../context/AuthContext'
import './post.css'
import PostCompose from '../../pages/home/homeModels/PostCompose/PostCompose'
import axios from 'axios'
import { useQueryClient } from '@tanstack/react-query'
const Post = ({ post }) => {
  const queryclient = useQueryClient()
  const { user } = JSON.parse(localStorage.getItem('authData'))
  const userData = queryclient.getQueryData(['getUser', user._id])
  const { getBookMarksQuery } = useGetBookMarks()
  const ans = getBookMarksQuery?.data?.some((el) => el._id === post._id)
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
  const isliked = () =>
    post.likes?.likedBy?.filter(({ _id }) => _id === userData?._id)?.length !==
    0

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
                <button className="post-settings-button">
                  <span className="material-symbols-outlined">more_horiz</span>
                </button>
                <div className="post-settings-content">
                  <button
                    className="filters"
                    onClick={() => {
                      setOpenPost(true)
                      setCurrentPostId(post._id)
                    }}
                  >
                    edit
                  </button>
                  <button
                    className="filters"
                    onClick={() => {
                      deletePostsMutation.mutate(post._id)
                    }}
                  >
                    delete
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="post-content">
          <p>{post.content}</p>
          <div>{post.imgSrc ? <img src={post.imgSrc} alt="" /> : null}</div>
        </div>
        {/* <div> */}
        <ul className="post-icons">
          {isliked() ? (
            <li
              onClick={() => {
                toggleDislikeMutation.mutate(post._id)
              }}
            >
              <span className="material-symbols-outlined fill">favorite</span>
            </li>
          ) : (
            <li
              onClick={() => {
                toggleLikeMutation.mutate(post._id)
              }}
            >
              <span className="material-symbols-outlined">favorite</span>
            </li>
          )}
          <li>
            <span
              style={{
                fontFamily:
                  'TwitterChirp,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif',
              }}
            >
              {post.likes.likeCount}
            </span>
          </li>
          {/* <li>{post.likes?.likeCount ? post.likes?.likeCount : 0}</li> */}

          {ans ? (
            <li
              onClick={() => {
                deleteBookMarkMutation.mutate(post._id)
              }}
            >
              <span className="material-symbols-outlined fill">bookmark</span>
            </li>
          ) : (
            <li
              onClick={() => {
                addBookMarkMutation.mutate(post._id)
              }}
            >
              <span className="material-symbols-outlined">bookmark</span>
            </li>
          )}
        </ul>
        {/* </div> */}
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
