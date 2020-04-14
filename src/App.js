import React, { useState } from "react";
import "./App.css";
import InputPanel from "./components/inputPanel";
import OutputPanel from "./components/outputPanel";
import About from "./components/about";
import { SAProvider } from "./context/specialAnnouncement";

function App() {
  const initialState = {
    announcementName: "Greetings",
    announcementText: "Test text field goes here",
    datePosted: "test",
    dateExpires: "expired",
    businessName: "name",
    businessURL: "URL",
    streetAddress: "street name",
    city: "city",
    zipCode: "zip",
    state: "state",
    Country: "USA",
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
