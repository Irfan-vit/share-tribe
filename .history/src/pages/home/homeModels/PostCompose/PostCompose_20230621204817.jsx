import './postCompose.css'
import useMutatePostsData from '../../../../backend/queryHooks/post/useMutatePosts'
const PostCompose = () => {
  const { addPostsMutation } = useMutatePostsData()

  return (
    <>
      <div className="post-compose">
        <textarea name="post" id=""></textarea>
        <div>
          {/* <ul>
            <li>
              <input type="file" id="file-input" onChange={handleFileChange} />
            </li>

            <li>emoji</li>
          </ul> */}
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
