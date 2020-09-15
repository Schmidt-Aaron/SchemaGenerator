import React, { useState, useReducer } from "react";
import "./App.css";
import InputPanel from "./components/inputPanel";
import OutputPanel from "./components/outputPanel";
import Controls from "./components/controls";
import About from "./components/about";
import Banner from "./components/banner";
import { SAProvider } from "./context/specialAnnouncement";

function App() {
  // app state
  const initialState = {
    announcementName: "[business name] Updated Operating Hours",
    announcementText:
      "We remain open and dedicated to serving our customers during this time. The safety of our customers and employees is our primary concern. [Add in any other details about how the business is responding to the pandemic here]",
    datePosted: "09-01-2020",
    dateExpires: "12-31-2020",
    businessName: "business name",
    priceRange: "$-$$$$",
    telephone: "",
    businessImage: "logo URL",
    businessURL: "website URL",
    streetAddress: "street address",
    city: "city",
    zipCode: "zip",
    state: "state",
    country: "USA",
    schema: null,
    msg: null,
    error: null,
  };

  const codeRef = React.createRef();
  // const [announcementData, setAnnouncementData] = useState(initialState);

  // const init = (initialState) => { return {initial}}

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
  const [announcementData, dispatch] = useReducer(reducer, initialState);

  // update function that can be passed into components
  const updateState = async (name, value) => {
    // setAnnouncementData({
    //   ...announcementData,
    //   [name]: value,
    //   schema: codeRef.current.textContent,
    // });
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

  // broken; cant update state all at once. Need to explore using a reducer vs loop through??
  const resetState = () => {
    // setAnnouncementData({ initialState });
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
    if (announcementData.schema === null) {
      dispatch({
        type: "update",
        name: "msg",
        value: "Schema Not Copied. Update the input fields and try again.",
        // type: "error",
      });
      dispatch({
        type: "update",
        name: "error",
        value: "Schema Not Copied. Update the input fields and try again.",
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

  return (
    <div className="App">
      {announcementData.msg ? (
        <Banner
          className="banner"
          msg={announcementData.msg}
          type={announcementData.type}
        />
      ) : null}
      <header className="header">
        <h1>Special Announcement Schema Generator</h1>
      </header>
      <main className="main">
        <About />
        <section>
          <SAProvider value={announcementData}>
            <Controls
              schema={announcementData.schema}
              reset={resetState}
              setBanner={setBanner}
            />
            <div className="schemaContainer">
              <InputPanel updateState={updateState} />
              <OutputPanel ref={codeRef} />
            </div>
            <Controls
              schema={announcementData.schema}
              reset={resetState}
              setBanner={setBanner}
            />
          </SAProvider>
        </section>
      </main>
      <footer className="attribution">
        <p>
          This tool was developed by Aaron Schmidt and is a work in progress.
          Feedback and/or bug reports are appreciated.{" "}
        </p>
        <p>
          <a href="https://github.com/Schmidt-Aaron/SchemaGenerator">
            Source Code
          </a>
        </p>
      </footer>
    </div>
  );
}

export default App;
