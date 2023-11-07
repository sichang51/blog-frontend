function Header() {
  return (
    <div>
      <header>
        <a href="#">Home</a> | <a href="#posts-index">All posts</a> | <a href="#posts-new">New post</a>
      </header>
    </div>
  );
}

function PostsNew() {
  return (
    <div id="posts-new">
      <h1>New post</h1>
      <h2>Enter your new blog posts here:</h2>

      <form>
        <label>
          Name:
          <input type="text" name="name" />
        </label>
        <br></br>
        <br></br>
        <input type="submit" value="submit" />
      </form>

      <br></br>
      <br></br>
      <h2>Enter your text here:</h2>
      <textarea>Hello there!</textarea>
    </div>
  );
}

function PostsIndex() {
  return (
    <div id="posts-index">
      <h1>All posts</h1>
      <h2>Week 3 Javascript Intro</h2>
      <body>Introduction to JS. Worked on LOTR game and other exercises to learn and reinforce new language.</body>

      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Javascript_badge.svg/946px-Javascript_badge.svg.png"
        width="200"
        height="250"
      />
    </div>
  );
}

function Footer() {
  return (
    <div>
      <footer>
        <p>Copyright 20XX</p>
      </footer>
    </div>
  );
}

function Content() {
  return (
    <div>
      <PostsNew />
      <PostsIndex />
    </div>
  );
}

function App() {
  return (
    <div>
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
