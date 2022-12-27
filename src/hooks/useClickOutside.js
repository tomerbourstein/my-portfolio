import { useState, useEffect, useRef } from "react";

export default function useClickOutside(initialIsMenuOpen) {
  const [isMenuOpen, setIsMenuOpen] = useState(initialIsMenuOpen);
  const ref = useRef(null);

  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside, true);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside, true);
    };
  }, []);

  return { ref, isMenuOpen, setIsMenuOpen };
}
