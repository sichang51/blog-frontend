export function PostsNew() {
  return (
    <div id="posts-new">
      <div className="new-post">
        <h1>New Posts</h1>
      </div>
      <h2>Enter your new blog posts here:</h2>
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

      <div className="form-group">
        New Post Title: <input className="form-control" type="text" name="title" />
      </div>
      <div className="form-group">
        New Blog Post: <input className="form-control" type="text" name="body" />
      </div>
      <div className="form-group">
        New Image URL: <input className="form-control" type="text" name="image" />
      </div>
    </div>
  );
}
