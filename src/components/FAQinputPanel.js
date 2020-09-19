import React, { useContext } from "react";
import FAQContext from "../context/FAQ";

export default function InputPanel(props) {
  const values = useContext(FAQContext);
  const { questions, answers, n } = values;

  // const handleChange = (event) => {
  //   const { name, value } = event.target;

  //   props.updateState(name, value);
  // };

  const handleArrayChange = (event, index) => {
    const { name, value } = event.target;

    // console.log(event);
    // console.log(name, value);
    props.updateState(name, value, index);
  };

  const handleClick = (event) => {
    event.target.select();
  };

  const trimOnBlur = (event) => {
    const { name, value } = event.target;

    const trimmedValue = value.trim();
    // console.log(`trimonblur: ${name}, ${value}`);
    // props.updateState(name, trimmedValue);
  };

  // add another faq input to DOM
  const addFAQ = (event) => {
    event.preventDefault();
    console.log("adding a new FAQ", n + 1);
    props.addFAQ();
  };

  console.log(questions);

  return (
    <div className="panel">
      <h3>FAQs</h3>
      <form>
        <div className="FAQS">
          {questions.map((question, index) => (
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
                onBlur={trimOnBlur}
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
                onBlur={trimOnBlur}
              />
            </div>
          ))}
        </div>
        <button onClick={addFAQ}>+</button>
      </form>
    </div>
  );
}
