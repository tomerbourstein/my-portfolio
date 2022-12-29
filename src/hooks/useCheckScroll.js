import { useEffect, useState, useReducer } from "react";
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
  // let playAnimationTop = scrollState.pageScrollTop ? classes.fadeOut : classes.fadeIn;
  // let playAnimationFirst = scrollState.firstP ? classes.slideIn : classes.slideOut;
  // let playAnimationSecond = scrollState.secondP ? classes.slideIn : classes.slideOut;
  // let playAnimationThird = scrollState.thirdP ? classes.slideIn : classes.slideOut;

  // const [pageScrollTop, isPageScrollTop] = useState(initialScroll);
  // const [firstP, setFirstP] = useState(initialScroll);
  // const [secondP, setSecondP] = useState(initialScroll);
  // const [thirdP, setThirdP] = useState(initialScroll);

  const getScrollData = () => {
    const scroll = window.scrollY;
    console.log(window.scrollY);
    if (scroll < 50 || scroll === undefined) dispatch({ type: "TOP" });
    if (scroll > 50) dispatch({ type: "NOT_TOP" });
    if (scroll > 1150) dispatch({ type: "FIRST" });
    if (scroll > 1650 || scroll < 1150) dispatch({ type: "FIRST_EXIT" });

    if (scroll > 1350) dispatch({ type: "SECOND" });
    if (scroll > 1800 || scroll < 1350) dispatch({ type: "SECOND_EXIT" });

    if (scroll > 1500) dispatch({ type: "THIRD" });
    if (scroll > 1950 || scroll < 1500) dispatch({ type: "THIRD_EXIT" });

    // else isPageScrollTop(initialScroll);
    // if (scroll > 1200 && scroll < 2000) setFirstP(!initialScroll);
    // else setFirstP(initialScroll);
  };

  useEffect(() => {
    document.addEventListener("scroll", getScrollData);
  }, []);
  return {
    pageScrollTop: scrollState.pageScrollTop,
    firstP: scrollState.firstP,
    secondP: scrollState.secondP,
    thirdP: scrollState.thirdP,

    // pageScrollTop,
    // isPageScrollTop,
    // firstP,
    // setFirstP,
  };
}
