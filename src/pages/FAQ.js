import React, { useState, useReducer } from "react";
import InputPanel from "../components/FAQinputPanel";
import OutputPanel from "../components/FAQoutputPanel";
import Controls from "../components/controls";
import About from "../components/aboutFAQ";
import { FAQProvider } from "../context/FAQ";
import Banner from "../components/banner";

function FAQ() {
  const codeRef = React.createRef();

  const initialState = {
    questions: "",
    answers: "",
    msg: null,
    error: null,
    schema: null,
    n: 0, // represents how many faqs
  };

  // reducer to reset state
  const reducer = (state, action) => {
    switch (action.type) {
      case "reset":
        return {
          ...initialState,
        };
      case "update":
        return {
          ...state,
          [action.name]: action.value,
        };
      default:
        return state;
    }
  };

  const [FAQData, dispatch] = useReducer(reducer, initialState);

  // update function that can be passed into components
  const updateState = async (name, value) => {
    dispatch({
      type: "update",
      name,
      value,
    });
    dispatch({
      type: "update",
      name: "schema",
      value: codeRef.current.textContent,
    });
  };

  const resetState = () => {
    dispatch({ type: "reset" });
    console.log("reset");
  };

  const clearBanner = () => {
    setTimeout(() => {
      dispatch({ type: "update", name: "msg", value: null });
      dispatch({ type: "update", name: "error", value: null });
    }, 2000);
  };

  const setBanner = async (msg) => {
    if (FAQData.schema === null) {
      dispatch({
        type: "update",
        name: "msg",
        value: "Schema Not Copied. Update the input fields and try again.",
      });
      dispatch({
        type: "update",
        name: "error",
        value: true,
      });
      console.log("Please enter valid schema data");
    } else {
      await dispatch({
        type: "update",
        name: "msg",
        value: msg,
      });
    }
    clearBanner();
  };

  const addFAQ = () => {
    dispatch({ type: "update", name: "n", value: (FAQData.n += 1) });
  };

  return (
    <div className="App">
      {FAQData.msg ? (
        <Banner className="banner" msg={FAQData.msg} error={FAQData.error} />
      ) : null}
      <header className="header">
        <h1>FAQ Schema Generator</h1>
      </header>
      <main className="main">
        <About />
        <section>
          <FAQProvider value={FAQData}>
            <Controls
              schema={FAQData.schema}
              reset={resetState}
              setBanner={setBanner}
            />
            <div className="schemaContainer">
              <InputPanel updateState={updateState} addFAQ={addFAQ} />
              <OutputPanel ref={codeRef} />
            </div>
            <Controls
              schema={FAQData.schema}
              reset={resetState}
              setBanner={setBanner}
            />
          </FAQProvider>
        </section>
      </main>
    </div>
  );
}

export default FAQ;
