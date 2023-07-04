// import './postCompose.css'
// import useMutatePostsData from '../../../../backend/queryHooks/post/useMutatePosts'
// import { useState } from 'react'
// const PostCompose = () => {
//   const { addPostsMutation } = useMutatePostsData()
//   const [filePreview, setFilePreview] = useState(null)
//   const [text, setText] = useState('')
//   const handleFileChange = (event) => {
//     const file = event.target.files[0]
//     if (file) {
//       const reader = new FileReader()
//       reader.onloadend = () => {
//         console.log(reader)
//         setFilePreview(reader.result)
//       }
//       reader.readAsDataURL(file)
//     } else {
//       setFilePreview(null)
//     }
//   }

//   return (
//     <>
//       <div className="post-compose">
//         <textarea name="post" id=""></textarea>
//         <div>
//           <ul>
//             <li>
//               <input type="file" id="file-input" onChange={handleFileChange} />
//             </li>

//             <li>emoji</li>
//           </ul>
//           <button
//             onClick={() => {
//               addPostsMutation.mutate({
//                 file: filePreview,
//                 content: 'i am a new post',
//               })
//             }}
//           >
//             tweet
//           </button>
//         </div>
//       </div>
//     </>
//   )
// }
// export default PostCompose

import React, { useState } from 'react'
import useMutatePostsData from '../../../../backend/queryHooks/post/useMutatePosts'
import PostPreview from './PostPreview'
import './postCompose.css'

const PostCompose = () => {
  const { addPostsMutation } = useMutatePostsData()
  const [filePreview, setFilePreview] = useState(null)
  const [text, setText] = useState('')

  const handleFileChange = (event) => {
    const file = event.target.files[0]
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

  const handleTextChange = (event) => {
    setText(event.target.value)
  }

  const handleEdit = (editedText) => {
    setText(editedText)
  }

  const handleFileEdit = (editedFile) => {
    const reader = new FileReader()
    reader.onloadend = () => {
      setFilePreview(reader.result)
    }
    reader.readAsDataURL(editedFile)
  }

  const handleAddPost = () => {
    addPostsMutation.mutate({
      file: filePreview,
      content: text,
    })
    setText('')
    setFilePreview(null)
  }

  return (
    <>
      <div className="post-compose">
        <textarea
          name="post"
          id=""
          value={text}
          onChange={handleTextChange}
        ></textarea>
        <div>
          <ul>
            <li>
              <input type="file" id="file-input" onChange={handleFileChange} />
            </li>
            <li>emoji</li>
          </ul>
          <button onClick={handleAddPost}>tweet</button>
        </div>
      </div>
      <PostPreview
        text={text}
        filePreview={filePreview}
        onEdit={handleEdit}
        onFileChange={handleFileEdit}
      />
    </>
  )
}

export default PostCompose
