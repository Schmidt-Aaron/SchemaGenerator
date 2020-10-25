import React, { useContext } from "react";
import ArticleContext from "../../context/article";

const OutputPanel = React.forwardRef((props, ref) => {
  const context = useContext(ArticleContext);
  // console.log(context);
  const {
    articleType,
    articleUrl,
    headline,
    image,
    description,
    authorType,
    authorName,
    publisherType, //not used? is it always an Org?
    publisher,
    publisherLogoURL,
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

      <code ref={ref} className="codeBlock">
        <p>
          <span className="script">{`<`}</span>
          <span className="script">script </span>
          <span className="attr">type=</span>
          <span className="value">"application/ld+json"</span>
          <span className="script">{`>`}</span>
        </p>
        <p>{`{`}</p>
        <p className="indent-1">
          <span className="type">{`"@context"`}</span>:{" "}
          <span className="value">"https://schema.org",</span>
        </p>
        <p className="indent-1">
          <span className="type">{`"@type"`}</span>:{" "}
          <span className="value">{`"${articleType}"`},</span>
        </p>
        {articleUrl && (
          <div>
            <p className="indent-1">
              <span className="type">{`"mainEntityOfPage`}</span>:{" {"}
            </p>
            <p className="indent-2">
              <span className="type">{`"@type"`}</span>:{" "}
              <span className="value">{`"WebPage"`},</span>
            </p>
            <p className="indent-2">
              <span className="type">{`"@id"`}</span>:{" "}
              <span className="value">{`"${articleUrl}"`}</span>
            </p>
            <p className="indent-1">{`},`}</p>
          </div>
        )}
        <p className="indent-1">
          <span className="type">{`"headline"`}</span>:{" "}
          <span className="value">{`"${headline}"`},</span>
        </p>
        {description && (
          <p className="indent-1">
            <span className="type">{`"description"`}</span>:{" "}
            <span className="value">{`"${description}"`},</span>
          </p>
        )}
        <p className="indent-1">
          <span className="type">{`"author"`}</span>:{" {"}
        </p>
        <p className="indent-2">
          <span className="type">{`"@type"`}</span>:{" "}
          <span className="value">{`"${authorType}"`},</span>
        </p>
        <p className="indent-2">
          <span className="type">{`"name"`}</span>:{" "}
          <span className="value">{`"${authorName}"`}</span>
        </p>
        <p className="indent-1">{`},`}</p>
        <p className="indent-1">
          <span className="type">{`"publisher"`}</span>:{" {"}
        </p>
        <p className="indent-2">
          <span className="type">{`"@type"`}</span>:{" "}
          <span className="value">{"Organization"},</span>
        </p>
        <p className="indent-2">
          <span className="type">{`"name"`}</span>:{" "}
          <span className="value">
            {`"${publisher}"`}
            {publisherLogoURL && ","}
          </span>
        </p>
        {publisherLogoURL && (
          <div>
            <p className="indent-2">
              <span className="type">{`"logo"`}</span>:{" {"}
            </p>
            <p className="indent-3">
              <span className="type">{`"@type"`}</span>:{" "}
              <span className="value">{"ImageObject"},</span>
            </p>
            <p className="indent-3">
              <span className="type">{`"url"`}</span>:{" "}
              <span className="value">{`"${publisherLogoURL}"`}</span>
            </p>
          </div>
        )}
        <p className="indent-2">{`}`}</p>
        <p className="indent-1">{`},`}</p>
        <p className="indent-1">
          <span className="type">{`"datePublished"`}</span>:{" "}
          <span className="value">
            {`"${datePublished}"`}
            {dateModified && ","}
          </span>
        </p>
        {dateModified && (
          <p className="indent-1">
            <span className="type">{`"dateModified"`}</span>:{" "}
            <span className="value">{`"${dateModified}"`}</span>
          </p>
        )}
        <p>{`}`}</p>
        <p>
          <span className="script">{`</`}</span>
          <span className="script">script </span>
          <span className="script">{`>`}</span>
        </p>
      </code>
    </div>
  );
});

export default OutputPanel;
