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
          <p>{post.body}</p>
          <img src={post.image} alt="" />
        </div>
      ))}
    </div>
  );
}
