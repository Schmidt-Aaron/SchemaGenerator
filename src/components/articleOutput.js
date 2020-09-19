import React, { useContext } from "react";
import ArticleContext from "../context/article";

const OutputPanel = React.forwardRef((props, ref) => {
  const context = useContext(ArticleContext);
  // console.log(context);
  const {
    articleType,
    url,
    headline,
    image,
    description,
    authorType,
    authorName,
    publisherType,
    publisher,
    publisherLogo,
    datePublished,
    dateModified,
    msg,
    error,
    schema,
    n,
  } = context;

  return (
    <div className="panel">
      <h3>JSON-LD Schema Preview</h3>

      <code ref={ref} className="codeBlock"></code>
    </div>
  );
});

export default OutputPanel;
