import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function LeaderBoard() {
  const [newUser, setNewUser] = useState("");
  const tagMessage = document.getElementById("tagMessage");
  const caps = {
    textTransform: "uppercase"
  };
  const [users, setUsers] = useState([
    "MARK5",
    "G0LLE",
    "TR1V1",
    "LHU78",
    "GEEW2",
    "DONNY",
    "PAS88"
  ]);

  // Function to store tag
  const handleStore = (e) => {
    setNewUser(e.target.value);
  };

 
  const onFormSubmit = (e) => {
    e.preventDefault();
    if (users.includes(newUser.toUpperCase()) === false) {
      setUsers([...users, newUser.toUpperCase()]);
      return (tagMessage.innerText = "Input your 5-character tag!");
    } else {
      return (tagMessage.innerText = "Tag Already Taken.");
    }
  };

  return (
    <div>
      <h1>
        <div className="sec1">
          <div className="title" id="t">
            L
          </div>
          <div className="title" id="r">
            E
          </div>
          <div className="title" id="i">
            A
          </div>
          <div className="title" id="v">
            D
          </div>
          <div className="title" id="y">
            E
          </div>
          <div className="title" id="a">
            R
          </div>
        </div>
        <div className="sec2">
          <div className="title" id="y">
            B
          </div>
          <div className="title" id="a">
            O
          </div>
          <div className="title" id="i">
            A
          </div>
          <div className="title" id="r">
            R
          </div>
          <div className="title" id="t">
            D
          </div>
        </div>
      </h1>
      <form onSubmit={(e) => onFormSubmit(e)}>
        <input
          style={caps}
          pattern="[a-zA-Z0-9-]{5}"
          type="text"
          name="newUser"
          onChange={handleStore}
          value={newUser}
        />

        <p id="tagMessage">Input your 5-character tag!</p>
        <button className="pure-button" id="go">
          Submit
        </button>
      </form>

      {users.map((user) => {
        return (
          <div key={uuid()}>
            <p>{user}</p>
          </div>
        );
      })}
    </div>
  );
}

export default LeaderBoard;