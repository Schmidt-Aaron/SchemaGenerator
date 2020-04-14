import React from "react";

export default function InputPanel(props) {
  const {
    announcementName,
    announcementText,
    datePosted,
    dateExpires,
    businessName,
    businessURL,
    streetAddress,
    city,
    zipCode,
    state,
    Country,
  } = props.values;
  const handleChange = (event) => {
    const { name, value } = event.target;

    props.updateState(name, value);
  };

  return (
    <div className="panel">
      <form>
        <label htmlFor="announcementName">Name of Announcement</label>
        <input
          type="text"
          name="announcementName"
          value={announcementName}
          onChange={handleChange}
        />

        <label htmlFor="announcementText">Announcement Text</label>
        <textarea
          type="text"
          name="announcementText"
          value={announcementText}
          onChange={handleChange}
        />

        <label htmlFor="datePosted">Posted Date</label>
        <input
          type="text"
          name="datePosted"
          value={datePosted}
          onChange={handleChange}
        />

        <label htmlFor="dateExpires">Expiration Date</label>
        <input
          type="text"
          name="dateExpires"
          value={dateExpires}
          onChange={handleChange}
        />

        {/* <label htmlFor="type">Local Business vs Civic Structure</label>
        <input type="text" name="type" value={} onChange={handleChange} /> */}

        <label htmlFor="businessName">Business Name</label>
        <input
          type="text"
          name="businessName"
          value={businessName}
          onChange={handleChange}
        />

        <label htmlFor="Business URL">Business URL</label>
        <input
          type="text"
          name="Business URL"
          value={businessURL}
          onChange={handleChange}
        />

        <label htmlFor="Street Address">Street Address</label>
        <input
          type="text"
          name="Street Address"
          value={streetAddress}
          onChange={handleChange}
        />

        <label htmlFor="City">City</label>
        <input type="text" name="City" value={city} onChange={handleChange} />

        <label htmlFor="Zip Code">Zip Code</label>
        <input
          type="text"
          name="Zip Code"
          value={zipCode}
          onChange={handleChange}
        />

        <label htmlFor="State/Region">State / Region(non-US)</label>
        <input
          type="text"
          name="State/Region"
          value={state}
          onChange={handleChange}
        />

        <label htmlFor="Country">Country</label>
        <input
          type="text"
          name="Country"
          value={Country}
          onChange={handleChange}
        />
      </form>
    </div>
  );
}
