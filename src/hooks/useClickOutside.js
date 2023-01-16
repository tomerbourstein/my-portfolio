import { useState, useEffect, useRef } from "react";

export default function useClickOutside(initialIsOpen) {
  const [isOpen, setIsOpen] = useState(initialIsOpen);
  const [listItemsShow, setListItemsShow] = useState(false);

  const ref = useRef(null);
  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setIsOpen(false);
      setListItemsShow(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside, true);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside, true);
    };
  }, []);

  return {
    ref,
    isOpen,
    setIsOpen,
    listItemsShow,
    setListItemsShow,
  };
}
