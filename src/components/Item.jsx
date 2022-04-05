import React, { useState } from "react";

export default function Item(props) {
  const {title, author, link} = props;
  const [item, setItem] = useState();
  return (
    <React.Fragment>
    <div className="App">
      <div>
        <h1>{title}</h1>
        <p>{author}</p>
        <a href={link}>{link}</a>
      </div>
    </div>
    </React.Fragment>
  );
}
