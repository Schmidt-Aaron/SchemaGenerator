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
    datePosted: "05-01-2020",
    dateExpires: "06-01-2020",
    businessName: "business name",
    priceRange: "$-$$$$",
    telephone: "555-123-4567",
    businessImage: "logo URL",
    businessURL: "website URL",
    streetAddress: "street address",
    city: "city",
    zipCode: "zip",
    state: "state",
    country: "USA",
    schema: null,
    msg: null,
    type: null,
  };

  const codeRef = React.createRef();
  const [announcementData, setAnnouncementData] = useState(initialState);

  // update function that can be passed into components
  const updateState = (name, value) => {
    setAnnouncementData({
      ...announcementData,
      [name]: value,
      schema: codeRef.current.textContent,
    });
  };

  const resetState = () => {
    // setAnnouncementData({ initialState });
    console.log("reset");
  };

  // reducer to reset state
  // const reducer = (state, action) => {
  //   switch (action.type) {
  //     case "reset":
  //       return {

  //       };
  //     case "update":
  //       return {};
  //     default:
  //       return state;
  //   }
  // };

  const clearBanner = () => {
    setTimeout(() => {
      setAnnouncementData({ ...announcementData, msg: null, type: null });
    }, 2000);
  };

  const setBanner = async (msg) => {
    if (announcementData.schema === null) {
      setAnnouncementData({
        ...announcementData,
        msg: "Schema Not Copied. Update the input fields and try again.",
        type: "error",
      });
      console.log("Please enter valid schema data");
    } else {
      await setAnnouncementData({
        ...announcementData,
        msg,
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
