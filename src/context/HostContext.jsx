// src/context/HostContext.js
import React, { createContext, useContext, useState, useEffect } from "react";

const HostContext = createContext();

export const useHost = () => useContext(HostContext);

export const HostProvider = ({ children }) => {
  const [host, setHost] = useState(() => {
    const savedHost = localStorage.getItem("easyStayHost");
    return savedHost ? JSON.parse(savedHost) : null;
  });

  useEffect(() => {
    if (host) {
      localStorage.setItem("easyStayHost", JSON.stringify(host));
    }
  }, [host]);

  return (
    <HostContext.Provider value={{ host, setHost }}>
      {children}
    </HostContext.Provider>
  );
};
