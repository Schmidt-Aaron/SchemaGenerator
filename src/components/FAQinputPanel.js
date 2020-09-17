import React, { useContext } from "react";
import FAQContext from "../context/FAQ";

export default function InputPanel(props) {
  const values = useContext(FAQContext);
  const { questions, answers, n } = values;

  const handleChange = (event) => {
    const { name, value } = event.target;

    props.updateState(name, value);
  };

  const handleClick = (event) => {
    event.target.select();
  };

  const trimOnBlur = (event) => {
    const { name, value } = event.target;

    const trimmedValue = value.trim();

    props.updateState(name, trimmedValue);
  };

  // add another faq input to DOM
  const addFAQ = (event) => {
    event.preventDefault();
    console.log("adding a new FAQ", n + 1);
    props.addFAQ();
  };

  return (
    <div className="panel">
      <h3>FAQs</h3>
      <form>
        <label htmlFor="questions[0]Name">Question #1</label>
        <input
          type="text"
          name="questions"
          value={questions}
          onChange={handleChange}
          onClick={handleClick}
          onBlur={trimOnBlur}
        />

        <label htmlFor="answers[0]Text">Answer #1</label>
        <textarea
          type="text"
          rows={4}
          name="answers"
          value={answers}
          onChange={handleChange}
          onClick={handleClick}
          onBlur={trimOnBlur}
        />
        <button onClick={addFAQ}>+</button>
      </form>
    </div>
  );
}
