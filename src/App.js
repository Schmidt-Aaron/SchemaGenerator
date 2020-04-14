import React, { useState } from "react";
import "./App.css";
import InputPanel from "./components/inputPanel";
import OutputPanel from "./components/outputPanel";
import About from "./components/about";
import { SAProvider } from "./context/specialAnnouncement";

function App() {
  const initialState = {
    announcementName: "[business name] Covid-19 Operating Hours",
    announcementText:
      "We remain open and dedicated to serving our customers during this time. We are following all pertinent CDC protocols.",
    datePosted: "[date]",
    dateExpires: "expires at [date]",
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
  };

  const [announcement, setAnnouncement] = useState(initialState);

  const updateState = (name, value) => {
    setAnnouncement({ ...announcement, [name]: value });
  };

  return (
    <div className="App">
      <header className="header">
        <h1>Special Announcement Schema Generator</h1>
      </header>
      <main className="main">
        <About />
        <section className="inputContainer">
          <SAProvider value={announcement}>
            <InputPanel updateState={updateState} values={announcement} />
            <OutputPanel />
          </SAProvider>
        </section>
      </main>
    </div>
  );
}

export default App;
