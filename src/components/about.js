import React from "react";

export default function About() {
  return (
    <div>
      <h2>About</h2>
      <p>
        This tool is meant to help speed up the creation of JSON+LD snippets of
        the new Special Announcement Schema that was rolled out as a response to
        the Covid pandemic. If you are unfamiliar with structured data and it's
        implementation then I suggest you check out the{" "}
        <a href="https://developers.google.com/search/docs/guides/intro-structured-data">
          Google documentation
        </a>{" "}
        to get up-to-speed.
      </p>
      <p>
        You can read more about the Special Announcement schema in the
        documentation from{" "}
        <a href="https://developers.google.com/search/docs/data-types/special-announcements">
          Google
        </a>
        , or{" "}
        <a href="https://www.bing.com/webmaster/help/special-announcement-specifications-5cbd6249">
          Bing
        </a>
      </p>
      <p>
        *Please note that this tool is in the early stages of development. I
        will make it prettier soon ;)*
      </p>
      <h2>Instructions</h2>
      <ul>
        <li>
          Obtain the current schema data from the site using{" "}
          <a href="https://search.google.com/structured-data/testing-tool/u/0/">
            Structured Data Testing Tool
          </a>
          . This is to ensure consistent schema data.
        </li>
        <li>
          Copy over all pertinent data fields from the current schema into this
          tool.
        </li>
        <li>Fill in any remaining fields</li>
        <li>
          Cut and paste the completed schema from the output field then use the
          tool above to test the snippet . If the schema comes back without any
          errors. Add the schema to the head of the target site.
        </li>
        <li>Retest original url after you have added the schema.</li>
      </ul>
    </div>
  );
}
