import React from "react";

export default function Banner(props) {
  const { msg, type } = props;
  console.log(type);

  return (
    <div>
      {type ? (
        <div className="banner error">
          <p>{msg}</p>
        </div>
      ) : (
        <div className="banner">
          <p>{msg}</p>
        </div>
      )}
    </div>
  );
}
