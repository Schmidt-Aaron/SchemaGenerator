import React from "react";

const SpecialAnnouncementContext = React.createContext(null);

export const SAProvider = SpecialAnnouncementContext.Provider;
export const SAConsumer = SpecialAnnouncementContext.Consumer;

export default SpecialAnnouncementContext;
