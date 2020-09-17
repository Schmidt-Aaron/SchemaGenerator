import React, { useState, useReducer } from "react";
import InputPanel from "../components/SAinputPanel";
import OutputPanel from "../components/SAoutputPanel";
import Controls from "../components/controls";
import About from "../components/aboutSA";
import Banner from "../components/banner";
import { SAProvider } from "../context/specialAnnouncement";
import initialState from "../initialState/specialAnnouncement";

function SpecialAnnouncement() {
  const codeRef = React.createRef();

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
    if (announcementData.schema === null) {
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

  return (
    <div className="App">
      {announcementData.msg ? (
        <Banner
          className="banner"
          msg={announcementData.msg}
          error={announcementData.error}
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
    </div>
  );
}

export default SpecialAnnouncement;
