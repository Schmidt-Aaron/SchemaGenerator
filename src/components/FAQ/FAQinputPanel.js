import React, { useContext } from "react";
import FAQContext from "../../context/FAQ";

export default function InputPanel(props) {
  const values = useContext(FAQContext);
  const { questions, answers, n } = values;

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
          ))}
        </div>
        <button onClick={addFAQ}>Add FAQ</button>
      </form>
    </div>
  );
}
