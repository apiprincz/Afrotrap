import React, { useState, useEffect } from "react";

export const useWindowResize = () => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const handleWindowResize = () =>
      setWidth(window.innerWidth || window.matchMedia("(max-width: 765px)"));
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  // Return the width so we can use it in our components
  return { width };
};

// export default useWindowResize;
