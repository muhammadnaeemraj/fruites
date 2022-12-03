import React, { useState } from "react";

const Counter = (prop) => {
  const [cnt, setCnt] = useState(0);
  return (
    <>
      <h2>Total fruits: {cnt}</h2>
    </>
  );
};

export default Counter;
