import React from "react";

const FAQContext = React.createContext(null);

export const FAQProvider = FAQContext.Provider;
export const FAQConsumer = FAQContext.Consumer;

export default FAQContext;
