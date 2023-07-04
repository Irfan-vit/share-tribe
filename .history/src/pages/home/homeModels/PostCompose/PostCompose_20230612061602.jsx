import './postCompose.css'
const PostCompose = () => {
  return (
    <>
      <div className="post-compose">
        <textarea name="post" id=""></textarea>
        <div>
          <ul>
            <li>photo</li>
            <li>emoji</li>
          </ul>
          <button>tweet</button>
        </div>
      </div>
    </>
  )
}
export default PostCompose
