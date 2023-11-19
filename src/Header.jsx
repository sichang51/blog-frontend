import { Link } from "react-router-dom";

export function Header() {
  return (
    <div>
      {/* <div className="header-block"> */}
      {/* <br></br>
        <br></br> */}
      {/* <a href="#home">
          <button className="header-home-button">Home</button>
        </a>{" "}
        |{" "}
        <a href="#posts-index">
          <button className="header-all-posts-button">All posts</button>
        </a>{" "}
        |{" "}
        <a href="#posts-new">
          <button className="header-new-post-button">New post</button>
        </a>
      </div>
      <img
        src="https://lh5.googleusercontent.com/QFTu6llopUzF38mRPbobI3C0OQG6D0qprr5dQkv4-pe-rXlh_GKlwvQtZaWUytAp6EY4mnNvytRYp8bvbiYeMFefF9Fldv129KwlNY5BnOCMvBYm0p64nLlfNV68lof6LGdfhoL8"
        width={180}
        height={90}
        style={{ alignSelf: "center" }}
        alt="Blog Logo"
      /> */}
      <nav className="navbar navbar-expand-lg" style={{ backgroundColor: "#0d6efd" }} data-bs-theme="dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Navbar
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/posts">
                  All Posts
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/posts/new">
                  New Posts
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/signup" className="nav-link" style={{ textDecoration: "none" }}>
                  Signup
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/login" className="nav-link" style={{ textDecoration: "none" }}>
                  Login
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
