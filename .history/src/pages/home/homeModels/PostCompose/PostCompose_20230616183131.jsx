import './postCompose.css'
import useMutatePostsData from '../../../../backend/queryHooks/post/useMutatePosts'
import { useState } from 'react'
const PostCompose = () => {
  const [selectedFile, setSelectedFile] = useState(null)
  const { addPostsMutation } = useMutatePostsData()
  const [filePreview, setFilePreview] = useState(null)
  const handleFileChange = (event) => {
    const file = event.target.files[0]
    setSelectedFile(file)

    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
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
              <label htmlFor="file-input">Choose File</label>
              <input
                type="file"
                id="file-input"
                onChange={(event) => {
                  setSelectedFile(event.target.files[0])
                }}
              />
            </li>

            <li>emoji</li>
          </ul>
          <button
            onClick={() => {
              console.log(selectedFile)
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
