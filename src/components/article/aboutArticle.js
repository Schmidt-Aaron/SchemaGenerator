import React from "react";

export default function About() {
  return (
    <div>
      <h2>About</h2>
      <p>
        This tool is meant to help speed up the creation of article JSON-LD
        schema.
      </p>
      <p>
        If you are unfamiliar with structured data and it's implementation then
        I suggest you check out the{" "}
        <a
          href="https://developers.google.com/search/docs/guides/intro-structured-data"
          target="_blank"
          rel="noopener noreferrer"
        >
          Google documentation
        </a>{" "}
        to get up-to-speed.
      </p>
      <p>
        You can read more about the Article schema in the documentation from{" "}
        <a
          href="https://developers.google.com/search/docs/data-types/article"
          target="_blank"
          rel="noopener noreferrer"
        >
          Google
        </a>
      </p>
      <p>
        *Please note that this tool is still in development and might have a few
        bugs. Feedback is appreciated.*
      </p>
      <h2>Instructions</h2>
      <ul>
        <li>
          Obtain the current schema data from the site using{" "}
          <a
            href="https://search.google.com/structured-data/testing-tool/u/0/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Structured Data Testing Tool
          </a>
          . This is to ensure consistent schema data.
        </li>
        <li>
          Copy over all pertinent data fields from the current schema into this
          tool.
        </li>
        <li>
          Fill in any remaining fields. The provided text is just an example. I
          encourage you to customize as needed for your use-case.
        </li>
        <li>
          Cut and paste the completed schema from the output field then use the
          tool above to test the snippet . If the schema comes back without any
          errors. Add the schema to the head of the target site.
        </li>
        <li>
          Retest original url after you have added the schema. Note: if you used
          Google Tag Manager to place the schema then it might not show up with
          the tool above. If that is the case try Google's{" "}
          <a
            href="https://search.google.com/test/rich-results"
            target="_blank"
            rel="noopener noreferrer"
          >
            Rich Results Test
          </a>{" "}
          tool to test your implementation.{" "}
        </li>
      </ul>
    </div>
  );
}
