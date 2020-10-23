import React, { useContext } from "react";
import ArticleContext from "../context/article";

export default function InputPanel(props) {
  const context = useContext(ArticleContext);
  const {
    articleType,
    articleUrl,
    headline,
    image,
    description,
    authorType,
    authorName,
    publisherType,
    publisher,
    publisherLogoURL,
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

  const handleChange = (event) => {
    const { name, value } = event.target;

    props.updateSingle(name, value);
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
              onChange={handleChange}
              onClick={handleClick}
              onBlur={}>input</input>
  
  
  */
  }

  return (
    <div className="panel">
      <h3>Article</h3>
      <form>
        <div className="article">
          <label>Article Type</label>
          <select value={articleType}>
            <option name="Article">Article</option>
            <option name="NewsArticle">NewsArticle</option>
            <option name="BlogPosting">BlogPosting</option>
          </select>
          <label>Article URL</label>
          <input
            type="text"
            name="articleUrl"
            value={articleUrl}
            onChange={handleChange}
            onClick={handleClick}
          />

          <label>Headline</label>
          <input
            type="text"
            name="headline"
            value={headline}
            onChange={handleChange}
            onClick={handleClick}
          />

          <label>Description</label>
          <input
            type="text"
            name="description"
            value={description}
            onChange={handleChange}
            onClick={handleClick}
          />

          <label>Image URL #1</label>
          <input
            type="text"
            name="image"
            value={image}
            onChange={handleChange}
            onClick={handleClick}
          />

          <label>Author Type</label>
          <select value={authorType}>
            <option name="Person">Person</option>
            <option name="Organization">Organization</option>
          </select>

          <label>Author Name</label>
          <input
            type="text"
            name="authorName"
            value={authorName}
            onChange={handleChange}
            onClick={handleClick}
          />

          <label>Publisher</label>
          <input
            type="text"
            name="publisher"
            value={publisher}
            onChange={handleChange}
            onClick={handleClick}
          />

          <label>Publisher Logo URL</label>
          <input
            type="text"
            name="publisherLogoURL"
            value={publisherLogoURL}
            onChange={handleChange}
            onClick={handleClick}
          />

          <label>Date Published</label>
          <input
            type="text"
            name="datePublished"
            value={datePublished}
            onChange={handleChange}
            onClick={handleClick}
          />

          <label>Date Modified</label>
          <input
            type="text"
            name="dateModified"
            value={dateModified}
            onChange={handleChange}
            onClick={handleClick}
          />

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
