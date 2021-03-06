import React from "react";

// add personal message to end of schema
const addCredit = (code) => {
  const attributionText = "<!--Schema Generated by AMS Schema Tool-->";

  return `${code}${attributionText}`;
};

const Controls = (props) => {
  const { reset, schema, setBanner } = props;
  const copyToClipboard = (e) => {
    const updatedSchema = addCredit(schema);
    console.log(updatedSchema);
    navigator.clipboard.writeText(updatedSchema).then(
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
