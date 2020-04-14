import React from "react";

export default function InputPanel(props) {
  const {
    announcementName,
    announcementText,
    datePosted,
    dateExpires,
    businessName,
    telephone,
    priceRange,
    businessURL,
    businessImage,
    streetAddress,
    city,
    zipCode,
    state,
    country,
  } = props.values;

  const handleChange = (event) => {
    const { name, value } = event.target;

    props.updateState(name, value);
  };

  return (
    <div className="panel">
      <h3>Inputs:</h3>
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
          rows={4}
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
        {/* Only use if need to toggle between local business and civic structure */}
        {/* <label htmlFor="type">Local Business vs Civic Structure</label>
        <input type="text" name="type" value={} onChange={handleChange} /> */}

        <label htmlFor="businessName">Business Name</label>
        <input
          type="text"
          name="businessName"
          value={businessName}
          onChange={handleChange}
        />

        <label htmlFor="telephone">Phone Number</label>
        <input
          type="text"
          name="telephone"
          value={telephone}
          onChange={handleChange}
        />

        <label htmlFor="priceRange">Price Range</label>
        <input
          type="text"
          name="priceRange"
          value={priceRange}
          onChange={handleChange}
        />

        <label htmlFor="businessImage">Business Image (URL)</label>
        <input
          type="text"
          name="businessImage"
          value={businessImage}
          onChange={handleChange}
        />

        <label htmlFor="Business URL">Business URL</label>
        <input
          type="text"
          name="businessURL"
          value={businessURL}
          onChange={handleChange}
        />

        <label htmlFor="Street Address">Street Address</label>
        <input
          type="text"
          name="streetAddress"
          value={streetAddress}
          onChange={handleChange}
        />

        <label htmlFor="City">City</label>
        <input type="text" name="city" value={city} onChange={handleChange} />

        <label htmlFor="state">State / Region(non-US)</label>
        <input type="text" name="state" value={state} onChange={handleChange} />

        <label htmlFor="Zip Code">Zip Code</label>
        <input
          type="text"
          name="zipCode"
          value={zipCode}
          onChange={handleChange}
        />

        <label htmlFor="Country">Country</label>
        <input
          type="text"
          name="country"
          value={country}
          onChange={handleChange}
        />
      </form>
    </div>
  );
}
