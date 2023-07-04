import React, { useState } from 'react'

const PostPreview = ({ text, filePreview, onEdit, onFileChange }) => {
  const [isEditing, setIsEditing] = useState(false)
  const [editedText, setEditedText] = useState(text)
  const [editedFile, setEditedFile] = useState(null)
  const [filePreviewURL, setFilePreviewURL] = useState(null)

  const handleTextChange = (event) => {
    setEditedText(event.target.value)
  }

  const handleFileChange = (event) => {
    const file = event.target.files[0]
    setEditedFile(file)
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setFilePreviewURL(reader.result)
      }
      reader.readAsDataURL(file)
    } else {
      setFilePreviewURL(null)
    }
  }

  const handleEdit = () => {
    setIsEditing(true)
  }

  const handleSave = () => {
    onEdit(editedText)
    onFileChange(editedFile)
    setIsEditing(false)
  }

  const handleClearImage = () => {
    setFilePreviewURL(null)
    setEditedFile(null)
  }

  return (
    <div>
      {isEditing ? (
        <>
          <textarea value={editedText} onChange={handleTextChange}></textarea>
          <input type="file" onChange={handleFileChange} />
          {filePreviewURL && (
            <div>
              <p>File Preview:</p>
              <img src={filePreviewURL} alt="File Preview" />
              <button onClick={handleClearImage}>Clear Image</button>
            </div>
          )}
          <button onClick={handleSave}>Save</button>
        </>
      ) : (
        <>
          <p>Text: {text}</p>
          {filePreview && (
            <div>
              <p>File Preview:</p>
              <img src={filePreview} alt="File Preview" />
            </div>
          )}
          <button onClick={handleEdit}>Edit</button>
        </>
      )}
    </div>
  )
}

export default PostPreview
