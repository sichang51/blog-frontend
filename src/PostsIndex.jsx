export function PostsIndex(props) {
  console.log(props.myPosts);
  return (
    <div id="posts-index" className="container text-center">
      <div className="header-all-posts">
        <h1>All posts</h1>
      </div>
      <div className="row">
        {props.myPosts.map((post) => (
          <div key={post.id} className="blogs col-lg-4 col-md-6 col-12 my-3">
            <h3>{post.title}</h3>
            <img src={post.image} alt="" height="200px" width="50px" />
            {/* <p>{post.body}</p> */}
            <br></br>
            <button className="btn btn-secondary" onClick={() => props.onShowPost(post)}>
              More Info
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
