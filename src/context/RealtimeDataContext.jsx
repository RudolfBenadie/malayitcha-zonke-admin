import React from "react";

export const RealtimeDataContext = React.createContext(null);

export const useRealtimeData = () => {
  return React.useContext(RealtimeDataContext);
};
