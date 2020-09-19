import React, { useContext } from "react";
import FAQContext from "../context/FAQ";

const OutputPanel = React.forwardRef((props, ref) => {
  const context = useContext(FAQContext);
  // console.log(context);

  const { questions, answers } = context;

  // const questions = ["first question"];
  // const answers = ["first answer"];

  return (
    <div className="panel">
      <h3>JSON-LD Schema Preview</h3>

      <code ref={ref} className="codeBlock">
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
            <span className="value">{`"FAQPage",`}</span>
          </span>
        </p>
        <p className="indent-1">
          <span>{`"mainEntity": [{`}</span>
        </p>
        {/* Start Questions */}
        {/* Initial Question */}
        <p className="indent-2">
          <span className="type">{`"@type"`}</span>:{" "}
          <span className="value">"Question",</span>
        </p>
        <p className="indent-2">
          <span className="type">{`"name"`}</span>:{" "}
          <span className="value">{`"${questions[0].value}"`},</span>
        </p>
        <p className="indent-2">
          <span className="type">{`"acceptedAnswer": {`}</span>{" "}
        </p>
        <p className="indent-3">
          <span className="type">{`"@type"`}:</span>{" "}
          <span className="value">"Answer",</span>
        </p>
        <p className="indent-3">
          <span className="type">{`"text"`}:</span>{" "}
          <span className="value">{`"${answers[0].value}"`}</span>
        </p>
        <p className="indent-3">{`}`}</p>
        <p className="indent-2">
          {`}`}
          {questions.length > 1 && `,`}
        </p>
        {/* end  initial question */}
        {/* start additional question s*/}
        {questions.length > 1 &&
          questions.slice(1).map((question, index) => (
            <div key={index + 1}>
              <p className="indent-2">{`{`}</p>
              <p className="indent-2">
                <span className="type">{`"@type"`}</span>:{" "}
                <span className="value">"Question",</span>
              </p>
              <p className="indent-2">
                <span className="type">{`"name"`}</span>:{" "}
                <span className="value">
                  {`"${questions[index + 1].value}"`},
                </span>
              </p>
              <p className="indent-2">
                <span className="type">{`"acceptedAnswer": {`}</span>{" "}
              </p>
              <p className="indent-3">
                <span className="type">{`"@type"`}:</span>{" "}
                <span className="value">"Answer",</span>
              </p>
              <p className="indent-3">
                <span className="type">{`"text"`}:</span>{" "}
                <span className="value">{`"${answers[index + 1].value}"`}</span>
              </p>
              <p className="indent-3">{`}`}</p>
              <p className="indent-2">
                {`}`}
                {questions.length > index + 2 && `,`}
              </p>
            </div>
          ))}
        {/* end questions */}
        <p className="indent-2">{`]`}</p> {/* only used on last question*/}
        <p className="indent-1">{`}`}</p>
        <p>
          <span className="script">{`</script>`}</span>
        </p>
      </code>
    </div>
  );
});

export default OutputPanel;
