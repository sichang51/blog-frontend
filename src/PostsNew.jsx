export function PostsNew(props) {
  const handleSubmit = (event) => {
    event.preventDefault();

    const params = new FormData(event.target);
    props.onCreatePost(params);
    event.target.reset();

    // axios
    //   .post("http://localhost:5173/posts.json", params)
    //   .then((response) => {
    //     console.log(response.data);
    //     event.target.reset();
    //   })
    //   .catch((error) => {
    //     console.log(error.response.data.error);
    //   });
  };
  return (
    <div id="posts-new">
      <div className="new-post">
        <h1>New Posts</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <h2>Enter your new blog posts here:</h2>
        <div className="form-group">
          New Post Title: <input className="form-control" type="text" name="title" />
        </div>
        <div className="form-group">
          New Blog Post: <input className="form-control" type="text" name="body" />
        </div>
        <div className="form-group">
          New Image URL: <input className="form-control" type="text" name="image" />
        </div>
        <button type="Submit" className="btn btn-primary">
          Create New Post
        </button>
        <br></br>
        <br></br>
        {/* // old form data fields// */}
        {/* <form>
        <label>
          <input type="text" placeholder="Title" />
        </label> */}
        {/* <br></br>
        <br></br>
        <input type="submit" value="submit" /> */}
        {/* </form>
      <form>
        <label>
          <input className="blog-textbox" type="text" placeholder="Enter your blog text here." />
        </label>
      </form>
      <br></br>

      <button className="post-button">Post</button>

      <h2>Upload image here:</h2>
      <div className="imagebox">Enter your image URL here.</div>
      <br></br>
      <button className="post-button">Push</button> */}
      </form>
    </div>
  );
}
