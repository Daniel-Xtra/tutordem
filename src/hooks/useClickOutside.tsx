/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect } from "react";

const UseClickOutside = (ref: any, handle: any) => {
  useEffect(() => {
    const handler = (event: MouseEvent | TouchEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        handle(event);
      }
    };
    document.addEventListener("mousedown", handler);
    document.addEventListener("touchstart", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
      document.removeEventListener("touchstart", handler);
    };
  }, [ref, handle]);
};

export default UseClickOutside;
