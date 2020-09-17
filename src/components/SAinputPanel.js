import React, { useContext } from "react";
import SpecialAnnouncementContext from "../context/specialAnnouncement";

export default function InputPanel(props) {
  const values = useContext(SpecialAnnouncementContext);
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
  } = values;

  const handleChange = (event) => {
    const { name, value } = event.target;

    props.updateState(name, value);
  };

  const handleClick = (event) => {
    event.target.select();
  };

  const trimOnBlur = (event) => {
    const { name, value } = event.target;

    const trimmedValue = value.trim();

    props.updateState(name, trimmedValue);
  };

  return (
    <div className="panel">
      <h3>Business Details</h3>
      <form>
        <label htmlFor="announcementName">Name of Announcement</label>
        <input
          type="text"
          name="announcementName"
          value={announcementName}
          onChange={handleChange}
          onClick={handleClick}
          onBlur={trimOnBlur}
        />

        <label htmlFor="announcementText">
          Announcement Text (155 chars shown for Bing?)
        </label>
        <textarea
          type="text"
          rows={4}
          name="announcementText"
          value={announcementText}
          onChange={handleChange}
          onClick={handleClick}
          onBlur={trimOnBlur}
        />

        <label htmlFor="datePosted">Posted Date (MM-DD-YYYY)</label>
        <input
          type="text"
          name="datePosted"
          value={datePosted}
          onChange={handleChange}
          onClick={handleClick}
          onBlur={trimOnBlur}
        />

        <label htmlFor="dateExpires">Expiration Date (MM-DD-YYYY)</label>
        <input
          type="text"
          name="dateExpires"
          value={dateExpires}
          onChange={handleChange}
          onClick={handleClick}
          onBlur={trimOnBlur}
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
          onClick={handleClick}
          onBlur={trimOnBlur}
        />

        <label htmlFor="telephone">Phone Number</label>
        <input
          type="text"
          name="telephone"
          value={telephone}
          placeholder="555-123-4567"
          onChange={handleChange}
          onClick={handleClick}
          onBlur={trimOnBlur}
        />

        <label htmlFor="priceRange">Price Range</label>
        <input
          type="text"
          name="priceRange"
          value={priceRange}
          onChange={handleChange}
          onClick={handleClick}
          onBlur={trimOnBlur}
        />

        <label htmlFor="businessImage">Business Logo URL</label>
        <input
          type="text"
          name="businessImage"
          value={businessImage}
          onChange={handleChange}
          onClick={handleClick}
          onBlur={trimOnBlur}
        />

        <label htmlFor="Business URL">Business Website URL</label>
        <input
          type="text"
          name="businessURL"
          value={businessURL}
          onChange={handleChange}
          onClick={handleClick}
          onBlur={trimOnBlur}
        />

        <label htmlFor="Street Address">Street Address</label>
        <input
          type="text"
          name="streetAddress"
          value={streetAddress}
          onChange={handleChange}
          onClick={handleClick}
          onBlur={trimOnBlur}
        />

        <label htmlFor="City">City</label>
        <input
          type="text"
          name="city"
          value={city}
          onChange={handleChange}
          onClick={handleClick}
          onBlur={trimOnBlur}
        />

        <label htmlFor="state">State / Region(non-US)</label>
        <input
          type="text"
          name="state"
          value={state}
          onChange={handleChange}
          onClick={handleClick}
          onBlur={trimOnBlur}
        />

        <label htmlFor="Zip Code">Zip Code</label>
        <input
          type="text"
          name="zipCode"
          value={zipCode}
          onChange={handleChange}
          onClick={handleClick}
          onBlur={trimOnBlur}
        />

        <label htmlFor="Country">Country</label>
        <input
          type="text"
          name="country"
          value={country}
          onChange={handleChange}
          onClick={handleClick}
          onBlur={trimOnBlur}
        />
      </form>
    </div>
  );
}
