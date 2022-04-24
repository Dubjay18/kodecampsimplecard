import React, { useState } from "react";
import User from "./User";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);
  async function getData(url = "") {
    // Default options are marked with *
    const response = await fetch(url, {
      method: "GET", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: "follow", // manual, *follow, error
      referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      // body: JSON.stringify(data), // body data type must match "Content-Type" header
    });
    return response.json(); // parses JSON response into native JavaScript objects
  }
  getData("https://jsonplaceholder.typicode.com/users").then((data) => {
    console.log(data);
    setUsers(data); // JSON data parsed by `data.json()` call
  });
  return (
    <div className="mx-cus  ">
      <div className="d-flex py-5 justify-content-center align-items-center">
        {" "}
        <h1 className="">USERS</h1>
      </div>

      {users.map((user, i) => {
        return (
          <div key={i} className="">
            <User
              name={user.name}
              email={user.email}
              website={user.website}
              phone={user.phone}
              city={user.address.city}
              street={user.address.street}
              bio={user.company.catchPhrase}
              suite={user.address.suite}
              username={user.username}
            />
          </div>
        );
      })}
    </div>
  );
}

export default App;
