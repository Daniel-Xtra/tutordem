"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const ScrollToTop = () => {
  const pathname = usePathname(); // Detect route changes

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]); // Scroll to top when pathname changes

  return null;
};

export default ScrollToTop;
