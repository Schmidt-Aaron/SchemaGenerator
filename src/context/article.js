import React from "react";

const ArticleContext = React.createContext(null);

export const ArticleProvider = ArticleContext.Provider;
export const ArticleConsumer = ArticleContext.Consumer;

export default ArticleContext;
