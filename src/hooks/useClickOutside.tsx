import { usePathname } from "next/navigation";
import {
  useState,
  useRef,
  useEffect,
  useCallback,
  useLayoutEffect,
} from "react";

export function useClickOutside(uniqueId: string) {
  const [isOpen, setIsOpen] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const pathname = usePathname();
  const resizeTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const eventListenerAttached = useRef(false);

  // const checkDeviceType = useCallback(() => {
  //   if (typeof window === "undefined") return;
  //   if (resizeTimeoutRef.current) clearTimeout(resizeTimeoutRef.current);

  //   resizeTimeoutRef.current = setTimeout(() => {
  //     setIsTouchDevice(window.innerWidth < 1280);
  //   }, 150);
  // }, []);

  const checkDeviceType = useCallback(() => {
    if (typeof window === "undefined") return;
    if (resizeTimeoutRef.current) clearTimeout(resizeTimeoutRef.current);

    resizeTimeoutRef.current = setTimeout(() => {
      setIsTouchDevice(
        "ontouchstart" in window || navigator.maxTouchPoints > 0
      );
    }, 150);
  }, []);

  useLayoutEffect(() => {
    if (typeof window === "undefined") return;
    checkDeviceType();
    window.addEventListener("resize", checkDeviceType);

    return () => {
      window.removeEventListener("resize", checkDeviceType);
      if (resizeTimeoutRef.current) clearTimeout(resizeTimeoutRef.current);
    };
  }, [checkDeviceType]);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const handleClickOutside = useCallback((event: PointerEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node) &&
      !(event.target as Element)?.closest(".dialog")
    ) {
      setIsOpen(false);
    }
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (isOpen && !eventListenerAttached.current) {
      document.addEventListener("pointerdown", handleClickOutside);
      window.dispatchEvent(
        new CustomEvent("closeDropdowns", { detail: uniqueId })
      );
      eventListenerAttached.current = true;
    } else if (!isOpen && eventListenerAttached.current) {
      document.removeEventListener("pointerdown", handleClickOutside);
      eventListenerAttached.current = false;
    }
  }, [isOpen, uniqueId, handleClickOutside]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const handleCloseDropdowns = (event: Event) => {
      const customEvent = event as CustomEvent<string>;
      if (customEvent.detail !== uniqueId) {
        setIsOpen(false);
      }
    };

    window.addEventListener("closeDropdowns", handleCloseDropdowns);
    return () => {
      window.removeEventListener("closeDropdowns", handleCloseDropdowns);
    };
  }, [uniqueId]);

  const handleMouseEnter = useCallback(() => {
    if (!isTouchDevice) setIsOpen(true);
  }, [isTouchDevice]);

  const handleMouseLeave = useCallback(() => {
    if (!isTouchDevice) setIsOpen(false);
  }, [isTouchDevice]);

  const handleClick = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  return {
    isOpen,
    dropdownRef,
    handleMouseEnter,
    handleMouseLeave,
    handleClick,
  };
}
