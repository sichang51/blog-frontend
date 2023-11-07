export function Header() {
  return (
    <div>
      <img
        src="https://lh5.googleusercontent.com/QFTu6llopUzF38mRPbobI3C0OQG6D0qprr5dQkv4-pe-rXlh_GKlwvQtZaWUytAp6EY4mnNvytRYp8bvbiYeMFefF9Fldv129KwlNY5BnOCMvBYm0p64nLlfNV68lof6LGdfhoL8"
        width={180}
        height={90}
        style={{ alignSelf: "center" }}
        alt="Blog Logo"
      />
      <div className="header-block">
        {/* <br></br>
        <br></br> */}
        <a href="#home">
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
    </div>
  );
}
