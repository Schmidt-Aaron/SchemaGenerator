import React, { useReducer } from "react";
import InputPanel from "../components/article/articleInput";
import OutputPanel from "../components/article/articleOutput";
import Controls from "../components/controls";
import About from "../components/article/aboutArticle";
import { ArticleProvider } from "../context/article";
import Banner from "../components/banner";
import NavBar from "../components/nav";

function FAQ() {
  const codeRef = React.createRef();

  const initialState = {
    articleType: ["Article", "NewsArticle", "BlogPosting"], // dropdown
    articleUrl: null, // URL
    headline: "", // Text
    image: [{ id: 0, value: "" }], // optional, array
    description: null, // optional, Text
    authorType: ["Person", "Organization"], //dropdown
    authorName: "", // Text
    publisherType: "Organization", // is always org??
    publisher: "", // Text
    publisherLogoURL: "", // URL
    datePublished: "", // 2020-09-01
    dateModified: "", // 2020-09-01
    msg: null,
    error: null,
    schema: null,
    n: 0, // represents how many images
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
          schema: code,
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

  const [articleData, dispatch] = useReducer(reducer, initialState);

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

  //update single item
  const updateSingle = (name, value) => {
    dispatch({
      type: "SINGLE_UPDATE",
      name,
      value,
      code: codeRef.current.textContent,
    });
  };

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
    if (articleData.schema === null) {
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
      <NavBar />
      <main className="main">
        {articleData.msg ? (
          <Banner
            className="banner"
            msg={articleData.msg}
            error={articleData.error}
          />
        ) : null}
        <h1>Article Schema Generator *not working*</h1>
        <About />
        <section>
          <ArticleProvider value={articleData}>
            <Controls
              schema={articleData.schema}
              reset={resetState}
              setBanner={setBanner}
            />
            <div className="schemaContainer">
              <InputPanel
                updateArray={updateArray}
                updateSingle={updateSingle}
                addFAQ={addFAQ}
              />
              <OutputPanel ref={codeRef} />
            </div>
            <Controls
              schema={articleData.schema}
              reset={resetState}
              setBanner={setBanner}
            />
          </ArticleProvider>
        </section>
      </main>
    </div>
  );
}

export default FAQ;
