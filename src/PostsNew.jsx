export function PostsNew() {
  return (
    <div id="posts-new">
      <div className="new-post">
        <h1>New post</h1>
        <h2>Enter your new blog posts here:</h2>
      </div>

      <form>
        <label>
          <input type="text" placeholder="Title" />
        </label>
        {/* <br></br>
        <br></br>
        <input type="submit" value="submit" /> */}
      </form>

      <h2>Enter your text here:</h2>
      <div className="textbox">Enter your blog text here.</div>
      <br></br>
      <button className="post-button">Post</button>
    </div>
  );
}
