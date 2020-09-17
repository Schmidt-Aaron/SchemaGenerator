import React from "react";

import Banner from "../components/banner";
import Footer from "../components/footer";

function Home() {
  return (
    <div className="App">
      {/* {announcementData.msg ? (
        <Banner
          className="banner"
          msg={announcementData.msg}
          error={announcementData.error}
        />
      ) : null} */}
      <header className="header">
        <h1>Schema Generator Tool</h1>
      </header>
      <main className="main">
        <h2>About the tool</h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium
          harum odio velit repudiandae. Iusto illum recusandae impedit
          exercitationem doloribus excepturi doloremque, error corrupti eveniet
          sequi magnam soluta quae cum nesciunt.
        </p>
      </main>
      <Footer />
    </div>
  );
}

export default Home;
