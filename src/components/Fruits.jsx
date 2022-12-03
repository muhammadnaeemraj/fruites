import React from "react";

function Fruits(prop) {
  const temp = "ali";
  const [fruits] = React.useState([
    { fruitName: "apple", id: 1 },
    { fruitName: "apple", id: 2 },
    { fruitName: "plum", id: 3 },
  ]);

  return (
    <div>
      {temp}
      {fruits.map((f) => (
        <p key={f.id}>{f.fruitName}</p>
      ))}
      <button onClick={()=> prop.data(fruits)}>Click Me</button>
    </div>
  );
}

export default Fruits;
