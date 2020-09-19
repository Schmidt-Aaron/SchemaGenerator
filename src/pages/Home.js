import React from "react";

// import Banner from "../components/banner";
import Footer from "../components/footer";
import NavBar from "../components/nav";

function Home() {
  return (
    <div className="App">
      <NavBar />
      {/* {announcementData.msg ? (
        <Banner
          className="banner"
          msg={announcementData.msg}
          error={announcementData.error}
        />
      ) : null} */}

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
