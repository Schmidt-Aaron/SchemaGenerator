import React, { useReducer } from "react";
import InputPanel from "../components/SA/SAinputPanel";
import OutputPanel from "../components/SA/SAoutputPanel";
import Controls from "../components/controls";
import About from "../components/SA/aboutSA";
import Banner from "../components/banner";
import { SAProvider } from "../context/specialAnnouncement";
import initialState from "../initialState/specialAnnouncement";
import NavBar from "../components/nav";

function SpecialAnnouncement() {
  const codeRef = React.createRef();

  // reducer to reset state
  const reducer = (state, action) => {
    switch (action.type) {
      case "RESET":
        return {
          ...initialState,
        };
      case "UPDATE":
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
      type: "UPDATE",
      name,
      value,
    });
    dispatch({
      type: "UPDATE",
      name: "schema",
      value: codeRef.current.textContent,
    });
  };

  const resetState = () => {
    dispatch({ type: "RESET" });
    console.log("reset");
  };

  const clearBanner = () => {
    setTimeout(() => {
      dispatch({ type: "UPDATE", name: "msg", value: null });
      dispatch({ type: "UPDATE", name: "error", value: null });
    }, 2000);
  };

  const setBanner = async (msg) => {
    if (announcementData.schema === null) {
      dispatch({
        type: "UPDATE",
        name: "msg",
        value: "Schema Not Copied. Update the input fields and try again.",
      });
      dispatch({
        type: "UPDATE",
        name: "error",
        value: true,
      });
      console.log("Please enter valid schema data");
    } else {
      await dispatch({
        type: "UPDATE",
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
      <NavBar />
      <main className="main">
        <h1>Special Announcement Schema Generator *WIP*</h1>
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
