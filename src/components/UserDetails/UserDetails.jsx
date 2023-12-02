import { Link, useLoaderData } from "react-router-dom";

const UserDetails = () => {
  const {
    id,
    name,
    username,
    email,
    address: { street, suite, city, zipcode },
  } = useLoaderData();

  return (
    <div>
      <h1>ID: {id}</h1>
      <h1>Name: {name}</h1>
      <h1>userName: {username}</h1>
      <h1>Email: {email}</h1>
      <h1>Street: {street}</h1>
      <h1>Suite: {suite}</h1>
      <h1>City: {city}</h1>
      <h1>ZipCode: {zipcode}</h1>
      <Link to={`/users`}>
        <button>Back to All Users</button>
      </Link>
    </div>
  );
};

export default UserDetails;
