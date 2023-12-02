/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
const User = ({ user }) => {
  const { id, name, username, email } = user;
  return (
    <div className="user__container">
      <div className="user__info">
        <h3>{name}</h3>
        <h3>{username}</h3>
        <h3>{email}</h3>
        <Link to={`/users/${id}`}>
          <button>User Details</button>
        </Link>
      </div>
    </div>
  );
};

export default User;
