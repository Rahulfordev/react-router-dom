/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
const Post = ({ post }) => {
  const { id, title, body } = post;
  return (
    <div className="post__container">
      <h3>{id}</h3>
      <h3>{title}</h3>
      <h3>{body}</h3>
      <Link to={`/posts/${id}`}>
        <button>Posts Details</button>
      </Link>
    </div>
  );
};

export default Post;
