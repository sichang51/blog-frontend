export function PostsShow(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onUpdatePost(props.post.id, params);
    event.target.reset();
  };

  const handleClick = () => {
    props.onDestroyPost(props.post);
  };

  return (
    <div>
      <h2>{props.post.title}</h2>
      <p>{props.post.body}</p>
      <div className="new-post"></div>
      <h2>Edit Post</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          Post Title: <input defaultValue={props.post.title} className="form-control" type="text" name="title" />
        </div>
        <div className="form-group">
          Blog Post: <input defaultValue={props.post.body} className="form-control" type="text" name="body" />
        </div>
        <div className="form-group">
          Image URL: <input defaultValue={props.post.image} className="form-control" type="text" name="image" />
        </div>
        <button type="Submit" className="btn btn-primary">
          Update Post
        </button>
      </form>
      <button onClick={handleClick} className="btn btn-danger">
        Delete Post
      </button>
    </div>
  );
}
