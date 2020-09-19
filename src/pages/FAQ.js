import React, { useReducer } from "react";
import InputPanel from "../components/FAQinputPanel";
import OutputPanel from "../components/FAQoutputPanel";
import Controls from "../components/controls";
import About from "../components/aboutFAQ";
import { FAQProvider } from "../context/FAQ";
import Banner from "../components/banner";

function FAQ() {
  const codeRef = React.createRef();

  const initialState = {
    questions: [{ id: 0, value: "" }],
    answers: [{ id: 0, value: "" }],
    msg: null,
    error: null,
    schema: null,
    n: 0, // represents how many faqs
  };

  // reducer to reset state
  const reducer = (state, action) => {
    const { name, value, index, code, msg, error } = action;
    // console.log(
    //   `reducer call: state:${state}, action:${action}, index:${index}`
    // );
    switch (action.type) {
      case "RESET":
        return {
          ...initialState,
        };
      case "ADD_FAQ":
        return {
          ...state,
          questions: [...state.questions, { id: state.n + 1, value: "" }],
          answers: [...state.answers, { id: state.n + 1, value: "" }],
          n: (state.n = state.questions.length - 1),
        };
      case "ARRAY_UPDATE":
        const newArr = [...state[name]];
        newArr.find((item) => item.id === index).value = value;
        return {
          ...state,
          [name]: newArr,
          schema: code,
        };
      case "SINGLE_UPDATE":
        return {
          ...state,
          [name]: value,
        };
      case "ERROR_UPDATE":
        return {
          ...state,
          msg,
          error,
        };

      default:
        return state;
    }
  };

  const [FAQData, dispatch] = useReducer(reducer, initialState);

  // update function that can be passed into components
  const updateArray = (name, value, index) => {
    console.log(`updating: ${name}, ${value}, ${index}`);
    dispatch({
      type: "ARRAY_UPDATE",
      name,
      value,
      index,
      code: codeRef.current.textContent,
    });
  };

  // update single item - not used
  // const updateSingle = (name, value) => {
  //   dispatch({
  //     type: "SINGLE_UPDATE",
  //     name,
  //     value,
  //   });
  // };

  const resetState = () => {
    dispatch({ type: "RESET" });
    console.log("reset");
  };

  const clearBanner = () => {
    setTimeout(() => {
      dispatch({ type: "ERROR_UPDATE", msg: null, error: null });
    }, 2000);
  };

  const setBanner = async (msg) => {
    if (FAQData.schema === null) {
      dispatch({
        type: "ERROR_UPDATE",
        msg: "Schema Not Copied. Update the input fields and try again.",
        error: true,
      });

      console.log("Please enter valid schema data");
    } else {
      await dispatch({
        type: "SINGLE_UPDATE",
        name: "msg",
        value: msg,
      });
    }
    clearBanner();
  };

  const addFAQ = () => {
    dispatch({ type: "ADD_FAQ" });
  };

  return (
    <div className="App">
      {FAQData.msg ? (
        <Banner className="banner" msg={FAQData.msg} error={FAQData.error} />
      ) : null}
      <header className="header">
        <h1>FAQ Schema Generator *WIP*</h1>
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
              <InputPanel updateArray={updateArray} addFAQ={addFAQ} />
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
