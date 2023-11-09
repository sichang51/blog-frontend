export function PostsShow(props) {
  props.post;
  return (
    <div>
      <h2>{props.post.title}</h2>
      <p>{props.post.body}</p>
    </div>
  );
}
