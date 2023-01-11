import { useState } from "react";
import useInput from "../../hooks/useInput";
import classes from "./FloatingCard.module.css";

const FloatingCard = (props) => {
  const [posted, setPosted] = useState(false);

  const {
    value: enteredName,
    isValid: nameIsValid,
    hasError: nameHasError,
    valueChangeHandler: nameChangeHandler,
    valueBlurHandler: nameBlurHandler,
    reset: resetName,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredMessage,
    isValid: messageIsValid,
    hasError: messageHasError,
    valueChangeHandler: messageChangeHandler,
    valueBlurHandler: messageBlurHandler,
    reset: resetMessage,
  } = useInput((value) => value.trim() !== "");

  let formIsInvalid = true;
  if (nameIsValid && messageIsValid) formIsInvalid = false;
  let disableStyle = formIsInvalid ? classes.disabled : null;
  let animation = props.playCloseAnimation && !posted && classes.notOpen;
  let animationPosted =
    props.playCloseAnimation && posted && classes.notOpenAndPosted;

  const submitHandler = (event) => {
    event.preventDefault();
    const data = {
      enteredName,
      enteredMessage,
    };

    resetName();
    resetMessage();
    setPosted(true);
  };

  return (
    <div>
      <div className={classes.wrapper}>
        <div className={`${classes.card} ${animation} ${animationPosted}`}>
          <div className={classes.closeButton} onClick={() => props.onClose()}>
            <span></span>
            <span></span>
          </div>
          {!posted && (
            <form className={classes.form} onSubmit={submitHandler}>
              <div>
                <label htmlFor="name"></label>
                <input
                  type="text"
                  id="name"
                  placeholder="Enter Name"
                  value={enteredName}
                  onChange={nameChangeHandler}
                  onBlur={nameBlurHandler}
                ></input>
              </div>
              <div>
                <label htmlFor="textarea"></label>
                <textarea
                  id="text"
                  placeholder="Compose Message"
                  cols="38"
                  rows="4"
                  wrap="hard"
                  maxLength="160"
                  value={enteredMessage}
                  onChange={messageChangeHandler}
                  onBlur={messageBlurHandler}
                ></textarea>
              </div>
              <div>
                <button
                  disabled={formIsInvalid}
                  type="submit"
                  className={disableStyle}
                >
                  message me
                </button>
              </div>
            </form>
          )}

          {posted && (
            <div className={classes.thankYouForReaching}>
              <span>thank you for reaching out</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FloatingCard;
