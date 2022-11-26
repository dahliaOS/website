import { useEffect, useState } from "react";

export const useMeetsScrollPos = (threshold: number) => {
  const [meetsScrollPos, setMeetsScrollPos] = useState(false);

  useEffect(() => {
    if (!window) return;
    setMeetsScrollPos(window.innerWidth <= threshold);

    const scroll = () => setMeetsScrollPos(window.scrollY > threshold);

    window.addEventListener("scroll", scroll);
    return () => window.removeEventListener("scroll", scroll);
  }, [threshold]);

  return meetsScrollPos;
};
