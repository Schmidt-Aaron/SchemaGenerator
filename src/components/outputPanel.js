import React, { useContext } from "react";
import SpecialAnnouncementContext from "../context/specialAnnouncement";

export default function OutputPanel(props) {
  const context = useContext(SpecialAnnouncementContext);
  console.log(context);

  return (
    <div className="panel">
      <code>
        <span> </span>
        // type="application/ld+json">
        {/* {
          "@context" + \u003A + "https\u003A//schema.org",
          "@type"\u003A "SpecialAnnouncement",
          "name"\u003A "We remain open for video ehealth appointments.",
          "text"\u003A "We may not be able to see you in person but we are still here for you. While we obviously cannot deliver hands-on care remotely, there are many things that can be done to alleviate your pain or discomfort so you can feel like your best physical self.",
          "datePosted"\u003A "2020-04-01T08\u003A00",
          "category"\u003A "https\u003A//www.wikidata.org/wiki/Q81068910",
          "announcementLocation"\u003A {
            "@type"\u003A "LocalBusiness",
            "name"\u003A "Broadmead Orthopaedic Physiotherapy Clinic",
            "image" \u003A "https\u003A//www.broadmeadphysiotherapy.com/wp-content/uploads/2018/10/broadmead-physiotherapy-victoria.png",
            "url"\u003A "https\u003A//www.broadmeadphysiotherapy.com/covid-19-update/",
            "address"\u003A {
              "@type"\u003A "PostalAddress",
              "streetAddress"\u003A "4420 Chatterton Way #102",
              "addressLocality"\u003A "Victoria",
              "postalCode"\u003A "V8X 5J2",
              "addressRegion"\u003A "BC",
              "addressCountry"\u003A "CA"
            }
          }
        } */}
        {/* </script> */}
      </code>
    </div>
  );
}
