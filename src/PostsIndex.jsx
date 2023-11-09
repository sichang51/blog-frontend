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
          <img src={post.image} alt="" />
          <p>{post.body}</p>
          <button onClick={props.onShowPost}>More Info</button>
        </div>
      ))}
    </div>
  );
}
