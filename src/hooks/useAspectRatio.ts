import { useState, useEffect, useCallback } from "react";

function useAspectRatio() {
  const [aspectRatio, setAspectRatio] = useState(1);

  const updateAspectRatio = useCallback(() => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    setAspectRatio(width / height);
  }, []);

  useEffect(() => {
    updateAspectRatio();
    window.addEventListener("resize", updateAspectRatio);
    return () => window.removeEventListener("resize", updateAspectRatio);
  }, [updateAspectRatio]);

  return aspectRatio;
}

export default useAspectRatio;
