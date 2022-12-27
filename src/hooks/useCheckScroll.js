import { useEffect, useState } from "react";

export default function useCheckScroll(initialScroll) {
  const [showMenu, setShowMenu] = useState(initialScroll);
  const getScrollData = () => {
    if (window.scrollY > 50) setShowMenu(false);
    else setShowMenu(true);
  };

  useEffect(() => {
    document.addEventListener("scroll", getScrollData);
  }, []);
  return { showMenu, setShowMenu };
}
