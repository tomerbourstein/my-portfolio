import { useState } from "react";

import classes from "../components/Footer/Footer.module.css";

export default function useCollapse() {
  const [open, setOpen] = useState(false);
  let collapse = open ? classes.collapsable : classes.unCollapsable;
  let clicked = open && classes.clicked;
  return {
    open,
    setOpen,
    collapse,
    clicked,
  };
}
