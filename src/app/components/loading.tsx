"use client";  // Ensures this component runs on the client side

import { useState, useEffect } from "react";

const Loading = () => {
  // State to control the visibility of the spinner
  const [loading, setLoading] = useState(true);

  // Set a timeout to hide the loading spinner after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); // After 5 seconds, hide the loading spinner
    }, 5000); // 5000ms = 5 seconds

    // Cleanup the timer if the component unmounts or before the next render
    return () => clearTimeout(timer);
  }, []);

  return (
    <div id="loading-screen" className="min-h-screen bg-blue-100 flex items-center justify-center">
      {loading ? (
        <div className="flex items-center justify-center space-x-4">
          {/* Spinner */}
          <div className="animate-spin rounded-full border-t-4 border-b-4 border-white w-16 h-16"></div>
          <p className="text-white text-lg">Loading...</p>
        </div>
      ) : (
        <p className="text-blue-600 text-lg">Page Loaded!</p>
      )}
    </div>
  );
};

export default Loading;
