import React, { useContext, useRef } from "react";
import SpecialAnnouncementContext from "../context/specialAnnouncement";

const OutputPanel = React.forwardRef((props, ref) => {
  const context = useContext(SpecialAnnouncementContext);
  // console.log(context);

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
      <h3>JSON-LD Schema Preview</h3>

      <code ref={ref} className="codeBlock">
        {/* <p>{`<script type="application/ld+json">`}</p> */}
        <p>
          <span className="script">{`<`}</span>
          <span className="script">script </span>
          <span className="attr">type=</span>
          <span className="value">"application/ld+json"</span>
          <span className="script">{`>`}</span>
        </p>
        <p className="indent-1">{`{`}</p>
        <p className="indent-1">
          <span className="type">{`"@context"`}</span>:{" "}
          <span className="value">"https://schema.org",</span>
        </p>
        <p className="indent-1">
          <span className="key">
            <span className="type">{`"@type"`}:</span>{" "}
            <span className="value"></span>
            <span className="value">{`"SpecialAnnouncement",`}</span>
          </span>
        </p>
        <p className="indent-1">
          <span className="key">{`"name"`}:</span>{" "}
          <span className="value">{`"${announcementName}",`}</span>
        </p>
        <p className="indent-1">
          <span className="key">{`"text"`}:</span>{" "}
          <span className="value">{`"${announcementText}",`}</span>
        </p>
        <p className="indent-1">
          <span className="key">{`"datePosted"`}:</span>{" "}
          <span className="value">{`"${datePosted}",`}</span>
        </p>
        <p className="indent-1">
          <span className="key">{`"expires"`}:</span>{" "}
          <span className="value">{`"${dateExpires}",`}</span>
        </p>
        <p className="indent-1">
          <span className="key">{`"category"`}:</span>{" "}
          <span className="value">{`"https://www.wikidata.org/wiki/Q81068910",`}</span>
        </p>
        <p className="indent-1">
          <span className="key">{`"announcementLocation"`}:</span> {`{`}
        </p>
        <p className="indent-2">
          <span className="type">{`"@type"`}:</span>{" "}
          <span className="value">{`"LocalBusiness",`}</span>
        </p>
        <p className="indent-2">
          <span className="key">{`"name"`}:</span>
          <span className="value">{`"${businessName}",`}</span>
        </p>
        <p className="indent-2">
          <span className="key">{`"telephone"`}:</span>{" "}
          <span className="value">{`"${telephone}",`}</span>
        </p>
        <p className="indent-2">
          <span className="key">{`"priceRange"`}:</span>{" "}
          <span className="value">{`"${priceRange}",`}</span>
        </p>
        <p className="indent-2">
          <span className="key">{`"image"`}:</span>{" "}
          <span className="value">{`"${businessImage}",`}</span>
        </p>
        <p className="indent-2">
          <span className="key">{`"url"`}:</span>{" "}
          <span className="value">{`"${businessURL}",`}</span>
        </p>
        <p className="indent-2">
          <span className="key">{`"address"`}:</span> {`{`}
        </p>
        <p className="indent-3">
          <span className="type">{`"@type"`}:</span>{" "}
          <span className="value">{`"PostalAddress",`}</span>
        </p>
        <p className="indent-3">
          <span className="key">{`"streetAddress"`}:</span>{" "}
          <span className="value">{`"${streetAddress}",`}</span>
        </p>
        <p className="indent-3">
          <span className="key">{`"addressLocality"`}:</span>{" "}
          <span className="value">{`"${city}",`}</span>
        </p>
        <p className="indent-3">
          <span className="key">{`"addressRegion"`}:</span>{" "}
          <span className="value">{`"${state}",`}</span>
        </p>
        <p className="indent-3">
          <span className="key">{`"postalCode"`}:</span>{" "}
          <span className="value">{`"${zipCode}",`}</span>
        </p>
        <p className="indent-3">
          <span className="key">{`"addressCountry"`}:</span>{" "}
          <span className="value">{`"${country}"`}</span>
        </p>
        <p className="indent-3">{`}`}</p>
        <p className="indent-2">{`}`}</p>
        <p className="indent-1">{`}`}</p>
        <p>
          <span className="script">{`</script>`}</span>
        </p>
      </code>
    </div>
  );
});

export default OutputPanel;
