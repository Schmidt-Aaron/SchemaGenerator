import React from "react";

export default function Banner(props) {
  const { msg, error } = props;

  return (
    <div>
      {error ? (
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
