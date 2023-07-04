import './postCompose.css'
import useMutatePostsData from '../../../../backend/queryHooks/post/useMutatePosts'
import { useState } from 'react'
const PostCompose = ({ editData }) => {
  const [postText, setPOstText] = useState('')
  const { addPostsMutation, editPostsMutation } = useMutatePostsData()
  console.log(editData)

  return (
    <>
      <div className="post-compose">
        <textarea
          name="post"
          id=""
          onChange={(e) => {
            setPOstText(e.target.value)
          }}
          defaultValue={editData ? editData.content : ''}
        />
        <div>
          {editData ? (
            <button
              onClick={() => {
                editPostsMutation.mutate({
                  _id: post._id,
                  content: 'i am a new post',
                })
              }}
            >
              tweet
            </button>
          ) : (
            <button
              onClick={() => {
                addPostsMutation.mutate({
                  content: postText,
                })
              }}
            >
              tweet
            </button>
          )}
        </div>
      </div>
    </>
  )
}
export default PostCompose
