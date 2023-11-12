import axios from "axios";

export function PostsShow(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ target: event.target });
    const params = new FormData(event.target);
    axios.patch(`http;//localhost:3000/posts/${props.post.id}.json`, params).then((response) => {
      console.log(response.data);
    });
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
    </div>
  );
}
