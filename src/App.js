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
    announcementName: "[business name] Covid-19 Operating Hours",
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
  };

  const codeRef = React.createRef();
  const [announcementData, setAnnouncementData] = useState(initialState);

  // update function that can be passed into components
  const updateState = (name, value) => {
    // console.log(codeRef.current.textContent);
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

  return (
    <div className="App">
      {announcementData.msg ? <Banner /> : null}
      <header className="header">
        <h1>Special Announcement Schema Generator *WIP*</h1>
      </header>
      <main className="main">
        <About />
        <section>
          <SAProvider value={announcementData}>
            <Controls schema={announcementData.schema} reset={resetState} />
            <div className="inputContainer">
              <InputPanel updateState={updateState} />
              <OutputPanel ref={codeRef} />
            </div>
            <Controls schema={announcementData.schema} reset={resetState} />
          </SAProvider>
        </section>
      </main>
      <p className="attribution">
        This tool was developed by Aaron Schmidt and is a work in progress.
        Feedback and/or bug reports are appreciated.{" "}
        <a href="https://github.com/Schmidt-Aaron/SchemaGenerator">
          Source Code
        </a>
      </p>
    </div>
  );
}

export default App;
