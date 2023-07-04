import './post.css'
const Post = () => {
    return(
        <div className="post" id={post._id} key={post._id}>
            <div className="post-user">
              <div>
                <img
                  src={
                    getUsersQuery?.data?.find(
                      (user) => user.username === post.username,
                    ).avatar
                  }
                  alt=""
                />
              </div>
              <div>
                <div>
                  <h2>{post.username}</h2>
                  <span>{` ${new Date(post.createdAt)
                    .toDateString()
                    .split(' ')
                    .slice(1, 4)
                    .join(' ')}`}</span>
                </div>
                {username === post.username && (
                  <div className="post-settings">
                    <button className="post-settings-button">...</button>
                    <div className="post-settings-content">
                      <p
                        onClick={() => {
                          setOpenPost(true)
                          setCurrentPostId(post._id)
                        }}
                      >
                        edit
                      </p>
                      <p
                        onClick={() => {
                          deletePostsMutation.mutate(post._id)
                        }}
                      >
                        delete
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className="post-content">
              <p>{post.content}</p>
              <div>
                <img
                  src={
                    post.file
                      ? post.file
                      : 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
                  }
                  alt=""
                />
              </div>
            </div>
            <div className="post-icons">
              <ul>
                <li
                  onClick={() => {
                    toggleLikeMutation.mutate(post._id)
                  }}
                >
                  like{post.likes.likeCount}
                </li>
                <li
                  onClick={() => {
                    toggleDislikeMutation.mutate(post._id)
                  }}
                >
                  dislike
                </li>
                <li
                  onClick={() => {
                    addBookMarkMutation.mutate(post._id)
                  }}
                >
                  bookmark
                </li>
                <li
                  onClick={() => {
                    deleteBookMarkMutation.mutate(post._id)
                  }}
                >
                  remove-bookmark
                </li>
              </ul>
            </div>
    )
}
