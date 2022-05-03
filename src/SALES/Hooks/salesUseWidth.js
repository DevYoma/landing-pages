import { useState, useEffect } from 'react';

function salesUseWidth() {
//   const { innerWidth: width, innerHeight: height } = window;
const { innerWidth: width } = window;
  return {
    width,
    // height
  };
}

export default function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(salesUseWidth());

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(salesUseWidth());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}