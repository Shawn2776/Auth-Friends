import React from "react";

function Friend({ friend }) {

  return (
    <div className="card" style={{ width: "18rem" }}>
      <div className="card-body">
        <h5 className="card-title">{friend.name}</h5>
        <div className="dropdown">
          <div
            className="btn btn-secondary dropdown-toggle"
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            More Info
          </div>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li>
              <ul className="dropdown-item">
                Email: {friend.email}
              </ul>
            </li>
            <li>
              <ul className="dropdown-item">
                Age: {friend.age}
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Friend;
