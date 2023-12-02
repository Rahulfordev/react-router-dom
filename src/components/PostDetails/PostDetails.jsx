import { Link } from "react-router-dom";
import { useLoaderData } from "react-router-dom";

const PostDetails = () => {
  const { userId, id, title, body } = useLoaderData();
  return (
    <div>
      <h3>User ID: {userId}</h3>
      <h3>ID: {id}</h3>
      <h3>Title: {title}</h3>
      <h3>Body: {body}</h3>
      <Link to={`/posts`}>
        <button>Back to All Posts</button>
      </Link>
    </div>
  );
};

export default PostDetails;
