import { PostsIndex } from "./PostsIndex";
import { PostsNew } from "./PostsNew";

export function Content() {
  let posts = [
    {
      id: 1,
      title: "title1",
      body: "Introduction to JS. Worked on LOTR game and other exercises to learn and reinforce new language.",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Javascript_badge.svg/946px-Javascript_badge.svg.png",
    },
    {
      id: 2,
      title: "title2",
      body: "body2",
      image: "___",
    },
    {
      id: 3,
      title: "title3",
      body: "body3",
      image: "___",
    },
  ];

  return (
    <div>
      <PostsNew />
      <PostsIndex myPosts={posts} />
    </div>
  );
}
