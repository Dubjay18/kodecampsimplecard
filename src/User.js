import React from "react";

function User({
  name,
  city,
  street,
  bio,
  phone,
  username,
  email,
  website,
  suite,
}) {
  return (
    <div className="border card shadow">
      <h1>{name}</h1>
      <p>{bio}</p>
      <h1>General info</h1>

      <div className="d-flex  justify-content-between align-items-center">
        <h4>Email</h4>
        <p>{email}</p>
      </div>
      <div className="d-flex  justify-content-between align-items-center">
        <h4>Phone number</h4>
        <p>{phone}</p>
      </div>
      <div className="d-flex justify-content-between align-items-center">
        <h4>Address</h4>
        <p>
          {city}, {street}, {suite}
        </p>
      </div>
      <div className="d-flex  justify-content-between align-items-center">
        <h4>Username</h4>
        <p>{username}</p>
      </div>
      <div className="d-flex  justify-content-between align-items-center">
        <h4>Website</h4>
        <p>{website}</p>
      </div>
    </div>
  );
}

export default User;
