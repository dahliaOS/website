import { useEffect, useState } from "react";

export const useMeetsBreakpoint = (breakpoint: number) => {
  const [meetsBreakpoint, setMeetsBreakpoint] = useState(true);

  useEffect(() => {
    if (!window) return;
    setMeetsBreakpoint(window.innerWidth < breakpoint);

    const resize = () => setMeetsBreakpoint(window.innerWidth < breakpoint);

    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, [breakpoint]);

  return meetsBreakpoint;
};
