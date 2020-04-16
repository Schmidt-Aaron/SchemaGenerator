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
        <p className="indent-1">{`{`}</p>
        <p className="indent-1">
          {`"@context"`}: {`"https://schema.org",`}
        </p>
        <p className="indent-1">
          {`"@type"`}: {`"SpecialAnnouncement",`}
        </p>
        <p className="indent-1">
          {`"name"`}: {`"${announcementName}",`}
        </p>
        <p className="indent-1">
          {`"text"`}: {`"${announcementText}",`}
        </p>
        <p className="indent-1">
          {`"datePosted"`}: {`"${datePosted}",`}
        </p>
        <p className="indent-1">
          {`"expires"`}: {`"${dateExpires}",`}
        </p>
        <p className="indent-1">
          {`"category"`}: {`"https://www.wikidata.org/wiki/Q81068910",`}
        </p>
        <p className="indent-1">
          {`"announcementLocation"`}: {`{`}
        </p>
        <p className="indent-2">
          {`"@type"`}: {`"LocalBusiness",`}
        </p>
        <p className="indent-2">
          {`"name"`}:{`"${businessName}",`}
        </p>
        <p className="indent-2">
          {`"telephone"`}: {`"${telephone}",`}
        </p>
        <p className="indent-2">
          {`"priceRange"`}: {`"${priceRange}",`}
        </p>
        <p className="indent-2">
          {`"image"`}: {`"${businessImage}",`}
        </p>
        <p className="indent-2">
          {`"url"`}: {`"${businessURL}",`}
        </p>
        <p className="indent-2">
          {`"address"`}: {`{`}
        </p>
        <p className="indent-3">
          {`"@type"`}: {`"PostalAddress",`}
        </p>
        <p className="indent-3">
          {`"streetAddress"`}: {`"${streetAddress}",`}
        </p>
        <p className="indent-3">
          {`"addressLocality"`}: {`"${city}",`}
        </p>
        <p className="indent-3">
          {`"addressRegion"`}: {`"${state}",`}
        </p>
        <p className="indent-3">
          {`"postalCode"`}: {`"${zipCode}",`}
        </p>
        <p className="indent-3">
          {`"addressCountry"`}: {`"${country}"`}
        </p>
        <p className="indent-3">{`}`}</p>
        <p className="indent-2">{`}`}</p>
        <p className="indent-1">{`}`}</p>
        <p>{`</script>`}</p>
      </code>
    </div>
  );
}
