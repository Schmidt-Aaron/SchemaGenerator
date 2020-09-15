import React from "react";

const Controls = (props) => {
  const { reset, schema, setBanner } = props;
  const copyToClipboard = (e) => {
    navigator.clipboard.writeText(schema).then(
      () => {
        // success
        setBanner("Schema copied!");
      },
      () => {
        // failed
        console.log("Copy Failed");
      }
    );
  };

  return (
    <div className="controls">
      <button className="copy" onClick={copyToClipboard}>
        Copy to Clipboard
      </button>
      {/* <button className="validate">Validate</button> */}
      <button className="reset" onClick={reset}>
        Reset
      </button>
    </div>
  );
};

export default Controls;
