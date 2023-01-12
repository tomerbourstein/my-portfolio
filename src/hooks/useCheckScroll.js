import { useEffect, useReducer } from "react";
const initialScrollState = {
  pageScrollTop: true,
  firstP: false,
  secondP: false,
  thirdP: false,
};

const scrollStateReducer = (state, action) => {
  if (action.type === "TOP") {
    return {
      pageScrollTop: true,
      firstP: state.firstP,
      secondP: state.secondP,
      thirdP: state.thirdP,
    };
  }
  if (action.type === "NOT_TOP") {
    return {
      pageScrollTop: false,
      firstP: state.firstP,
      secondP: state.secondP,
      thirdP: state.thirdP,
    };
  }
  if (action.type === "FIRST")
    return {
      pageScrollTop: state.pageScrollTop,
      firstP: true,
      secondP: state.secondP,
      thirdP: state.thirdP,
    };
  if (action.type === "FIRST_EXIT") {
    return {
      pageScrollTop: state.pageScrollTop,
      firstP: false,
      secondP: state.secondP,
      thirdP: state.thirdP,
    };
  }
  if (action.type === "SECOND")
    return {
      pageScrollTop: state.pageScrollTop,
      firstP: state.firstP,
      secondP: true,
      thirdP: state.thirdP,
    };
  if (action.type === "SECOND_EXIT")
    return {
      pageScrollTop: state.pageScrollTop,
      firstP: state.firstP,
      secondP: false,
      thirdP: state.thirdP,
    };
  if (action.type === "THIRD")
    return {
      pageScrollTop: state.pageScrollTop,
      firstP: state.firstP,
      secondP: state.secondP,
      thirdP: true,
    };
  if (action.type === "THIRD_EXIT")
    return {
      pageScrollTop: state.pageScrollTop,
      firstP: state.firstP,
      secondP: state.secondP,
      thirdP: false,
    };
};

export default function useCheckScroll(initialScroll) {
  const [scrollState, dispatch] = useReducer(
    scrollStateReducer,
    initialScrollState
  );

  const getScrollData = () => {
    const scroll = window.scrollY;
    if (scroll < 50) dispatch({ type: "TOP" });
    if (scroll > 50) dispatch({ type: "NOT_TOP" });

    if (scroll > 1210) dispatch({ type: "FIRST" });
    if (scroll > 1850 || scroll < 1210) dispatch({ type: "FIRST_EXIT" });

    if (scroll > 1410) dispatch({ type: "SECOND" });
    if (scroll > 1960 || scroll < 1410) dispatch({ type: "SECOND_EXIT" });

    if (scroll > 1560) dispatch({ type: "THIRD" });
    if (scroll > 2110 || scroll < 1560) dispatch({ type: "THIRD_EXIT" });
  };

  useEffect(() => {
    document.addEventListener("scroll", getScrollData);
  }, []);

  return {
    pageScrollTop: scrollState.pageScrollTop,
    firstP: scrollState.firstP,
    secondP: scrollState.secondP,
    thirdP: scrollState.thirdP,
  };
}
