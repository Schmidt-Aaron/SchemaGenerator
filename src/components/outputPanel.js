import React, { useContext } from "react";
import SpecialAnnouncementContext from "../context/specialAnnouncement";

export default function OutputPanel(props) {
  const context = useContext(SpecialAnnouncementContext);
  console.log(context);

  const {
    announcementName,
    announcementText,
    datePosted,
    dateExpires,
    businessName,
    telephone,
    businessURL,
    businessImage,
    priceRange,
    streetAddress,
    city,
    zipCode,
    state,
    country,
  } = context;

  return (
    <div className="panel">
      <code>
        <p>{`<script type="application/ld+json">`}</p>
        <p>{`{`}</p>
        <p>
          {`"@context"`}: {`"https://schema.org",`}
        </p>
        <p>
          {`"@type"`}: {`"SpecialAnnouncement",`}
        </p>
        <p>
          {`"name"`}: {`"${announcementName}",`}
        </p>
        <p>
          {`"text"`}: {`"${announcementText}",`}
        </p>
        <p>
          {`"datePosted"`}: {`"${datePosted}",`}
        </p>
        <p>
          {`"expires"`}: {`"${dateExpires}",`}
        </p>
        <p>
          {`"category"`}: {`"https://www.wikidata.org/wiki/Q81068910",`}
        </p>
        <p>
          {`"announcementLocation"`}: {`{`}
        </p>
        <p>
          {`"@type"`}: {`"LocalBusiness",`}
        </p>
        <p>
          {`"name"`}: {`"${businessName}",`}
        </p>
        <p>
          {`"telephone"`}: {`"${telephone}",`}
        </p>
        <p>
          {`"priceRange"`}: {`"${priceRange}",`}
        </p>
        <p>
          {`"image"`}: {`"${businessImage}",`}
        </p>
        <p>
          {`"url"`}: {`"${businessURL}",`}
        </p>
        <p>
          {`"address"`}: {`{`}
        </p>
        <p>
          {`"@type"`}: {`"PostalAddress",`}
        </p>
        <p>
          {`"streetAddress"`}: {`"${streetAddress}",`}
        </p>
        <p>
          {`"addressLocality"`}: {`"${city}",`}
        </p>
        <p>
          {`"postalCode"`}: {`"${zipCode}",`}
        </p>
        <p>
          {`"addressRegion"`}: {`"${state}",`}
        </p>
        <p>
          {`"addressCountry"`}: {`"${country}"`}
        </p>
        <p>{`}`}</p>
        <p>{`}`}</p>
        <p>{`}`}</p>
        <p>{`</script>`}</p>
        {/* 
          
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
