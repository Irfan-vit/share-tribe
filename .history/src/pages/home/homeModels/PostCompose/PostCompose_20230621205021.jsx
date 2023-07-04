import './postCompose.css'
import useMutatePostsData from '../../../../backend/queryHooks/post/useMutatePosts'
import { useState } from 'react'
const PostCompose = () => {
  const [postText, setPOstText] = useState('')
  const { addPostsMutation } = useMutatePostsData()

  return (
    <>
      <div className="post-compose">
        <textarea name="post" id=""></textarea>
        <div>
          <button
            onClick={() => {
              addPostsMutation.mutate({
                content: 'i am a new post',
              })
            }}
          >
            tweet
          </button>
        </div>
      </div>
    </>
  )
}
export default PostCompose
