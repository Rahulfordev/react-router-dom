import { useLoaderData } from "react-router-dom";
import Post from "../Post/Post";
import "./Posts.css";
const Posts = () => {
  const posts = useLoaderData();
  console.log(posts);
  return (
    <div className="posts">
      {posts.slice(0, 12).map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
};

export default Posts;
