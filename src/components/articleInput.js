import React, { useContext } from "react";
import ArticleContext from "../context/article";

export default function InputPanel(props) {
  const context = useContext(ArticleContext);
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

  const handleArrayChange = (event, index) => {
    const { name, value } = event.target;

    props.updateArray(name, value, index);
  };

  const handleClick = (event) => {
    event.target.select();
  };

  // sanitizing/format entry
  const editOnBlur = (event, index) => {
    const { name, value } = event.target;

    const trimmedValue = value.trim();
    const capitalizedValue =
      trimmedValue.charAt(0).toUpperCase() + trimmedValue.slice(1);
    // console.log(`trimonblur: ${name}, ${value}`);
    props.updateArray(name, capitalizedValue, index);
  };

  // add another faq input to DOM
  const addFAQ = (event) => {
    event.preventDefault();
    console.log("adding a new FAQ", n + 1);
    props.addFAQ();
  };
  {
    /*
    <label>name</label>
              <input
              type="text"
              name={}
              value={}
              onChange={}
              onClick={}
              onBlur={}>input</input>
  
  
  */
  }

  return (
    <div className="panel">
      <h3>Article</h3>
      <form>
        <div className="article">
          <label>Article Type</label>
          <input type="text" name="articleType" value={articleType} />

          <label>Article URL</label>
          <input type="text" name="articleType" value={url} />

          <label>Headline</label>
          <input type="text" name="articleType" value={headline} />

          <label>Image URL #1</label>
          <input type="text" name="articleType" value={image} />

          <label>Description</label>
          <input type="text" name="articleType" value={description} />

          <label>Author Type</label>
          <input type="text" name="articleType" value={authorType} />

          <label>Author Name</label>
          <input type="text" name="articleType" value={authorName} />

          <label>Publisher</label>
          <input type="text" name="articleType" value={publisher} />

          <label>Publisher Logo URL</label>
          <input type="text" name="articleType" value={publisherLogo} />

          <label>Date Published</label>
          <input type="text" name="articleType" value={datePublished} />

          <label>Date Modified</label>
          <input type="text" name="articleType" value={dateModified} />

          {/* {questions.map((question, index) => (
            <div className="FAQ" key={index}>
              <label htmlFor={`questions[${index}]`}>{`Question #${
                index + 1
              }`}</label>
              <input
                type="text"
                name={`questions`}
                value={questions[index].value}
                onChange={(e) => handleArrayChange(e, index)}
                onClick={handleClick}
                onBlur={(e) => editOnBlur(e, index)}
              />

              <label htmlFor={`answers[${index}]`}>{`Answer #${
                index + 1
              }`}</label>
              <textarea
                type="text"
                rows={4}
                name={`answers`}
                value={answers[index].value}
                onChange={(e) => handleArrayChange(e, index)}
                onClick={handleClick}
                onBlur={(e) => editOnBlur(e, index)}
              />
            </div>
          ))} */}
        </div>
        {/* <button onClick={addFAQ}>+</button> */}
      </form>
    </div>
  );
}
