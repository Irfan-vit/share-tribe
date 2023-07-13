import './postCompose.css'
import useMutatePostsData from '../../../../backend/queryHooks/post/useMutatePosts'
import { useState } from 'react'
const PostCompose = ({ editData, close }) => {
  const [postText, setPOstText] = useState(editData ? editData.content : '')
  const { addPostsMutation, editPostsMutation } = useMutatePostsData()
  return (
    <>
      <div className="post-compose">
        <textarea
          name="post"
          id=""
          value={postText}
          onChange={(e) => {
            setPOstText(e.target.value)
          }}
          // defaultValue={editData ? editData.content : postText}
        />
        <div>
          {editData ? (
            <button
              onClick={() => {
                editPostsMutation.mutate({
                  _id: editData._id,
                  content: postText,
                })
                close(false)
              }}
            >
              edit
            </button>
          ) : (
            <button
              disabled={!postText}
              style={{ cursor: `${!postText ? 'not-allowed' : 'pointer'}` }}
              onClick={() => {
                addPostsMutation.mutate({
                  content: postText,
                })
                setPOstText('')
                close(false)
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
