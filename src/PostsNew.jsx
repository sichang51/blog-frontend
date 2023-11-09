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
      <form>
        <label>
          <input type="text" placehoolder="Enter your blog text here." />
        </label>
      </form>
      <br></br>
      <button className="post-button">Post</button>

      <h2>Upload image here:</h2>
      <div className="imagebox">Enter your image URL here.</div>
      <br></br>
      <button className="post-button">Push</button>
    </div>
  );
}
