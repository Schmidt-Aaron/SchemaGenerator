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
      <h3>Output Field:</h3>
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
          {`"name"`}:{`"${businessName}",`}
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
          {`"addressRegion"`}: {`"${state}",`}
        </p>
        <p>
          {`"postalCode"`}: {`"${zipCode}",`}
        </p>
        <p>
          {`"addressCountry"`}: {`"${country}"`}
        </p>
        <p>{`}`}</p>
        <p>{`}`}</p>
        <p>{`}`}</p>
        <p>{`</script>`}</p>
      </code>
    </div>
  );
}
