import './postCompose.css'
import use
const PostCompose = () => {
  const { addPostsMutation } = useMutatePostsData()
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
