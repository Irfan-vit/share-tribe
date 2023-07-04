import './postCompose.css'
import useMutatePostsData from '../../../../backend/queryHooks/post/useMutatePosts'
import { useState } from 'react'
const PostCompose = ({ editData }) => {
  const [postText, setPOstText] = useState()
  const { addPostsMutation, editPostsMutation } = useMutatePostsData()
  console.log(editData)

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
              }}
            >
              edit
            </button>
          ) : (
            <button
              onClick={() => {
                addPostsMutation.mutate({
                  content: postText,
                })
                setPOstText('')
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
