export function PostsIndex(props) {
  console.log(props.myPosts);
  return (
    <div id="posts-index">
      <div className="header-all-posts">
        <h1>All posts</h1>
      </div>

      {props.myPosts.map((post) => (
        <div key={post.id} className="blogs">
          <h3>{post.title}</h3>
          <img src={post.image} alt="" height="200px" width="50px" />
          {/* <p>{post.body}</p> */}
          <br></br>
          <button onClick={() => props.onShowPost(post)}>More Info</button>
        </div>
      ))}
    </div>
  );
}
