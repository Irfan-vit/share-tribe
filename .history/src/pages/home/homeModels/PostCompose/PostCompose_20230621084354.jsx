import './postCompose.css'
import useMutatePostsData from '../../../../backend/queryHooks/post/useMutatePosts'
import { useState } from 'react'
const PostCompose = () => {
  const { addPostsMutation } = useMutatePostsData()
  const [filePreview, setFilePreview] = useState(null)
  const handleFileChange = (event) => {
    const file = event.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        console.log(reader)
        setFilePreview(reader.result)
      }
      reader.readAsDataURL(file)
    } else {
      setFilePreview(null)
    }
  }

  return (
    <>
      <div className="post-compose">
        <textarea name="post" id=""></textarea>
        <div>
          <ul>
            <li>
              <input type="file" id="file-input" onChange={handleFileChange} />
            </li>

            <li>emoji</li>
          </ul>
          <button
            onClick={() => {
              addPostsMutation.mutate({
                file: filePreview,
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
