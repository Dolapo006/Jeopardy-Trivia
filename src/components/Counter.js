import React from "react";
import { v4 as uuid } from "uuid";

function Counter({ count }) {
  return (
    <div>
      {count.map(() => (
        <p key={uuid()} id="dot"></p>
      ))}
    </div>
  );
}

export default Counter;
