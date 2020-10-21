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
        <h2>About This Tool</h2>
        <p>
          This is a quick and easy JSON+LD schema generator. It is in the early stages of development and I will be adding support for additional schemas, as well as, increasing the functionality of the existing ones as time goes by. At some point I might even make it pretty.
        </p>
        <p>This project is currently fairly low on my priorities list so development might lag until I can sort out a few other things.</p>
        <h3>Currently Working Schema</h3>
        <ul>
          <li>FAQ</li>
          <li>Special Announcement</li>
        </ul>
        <h3>Coming Soon!</h3>
        <ul>
          <li>Article</li>
          <li>Video</li>
        </ul>
      </main>
      <Footer />
    </div>
  );
}

export default Home;
