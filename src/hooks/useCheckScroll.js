import { useEffect, useState } from "react";

export default function useCheckScroll(initialScroll) {
  const [pageScrollTop, isPageScrollTop] = useState(initialScroll);
  const getScrollData = () => {
    if (window.scrollY > 50) isPageScrollTop(false);
    else isPageScrollTop(true);
  };

  useEffect(() => {
    document.addEventListener("scroll", getScrollData);
  }, []);
  return { pageScrollTop, isPageScrollTop };
}
