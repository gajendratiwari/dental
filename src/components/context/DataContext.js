// src/context/DataContext.js
import React, { createContext, useState, useEffect } from "react";

// Create the context
export const DataContext = createContext();

// DataProvider component to wrap your app and provide data
export const DataProvider = ({ children }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Simulating data fetching (can be API or local file)
    fetch("/data/services.json")
      .then((response) => response.json())
      .then((jsonData) => setData(jsonData))
      .catch((error) => console.error("Error loading data:", error));
  }, []);

  return <DataContext.Provider value={data}>{children}</DataContext.Provider>;
};
