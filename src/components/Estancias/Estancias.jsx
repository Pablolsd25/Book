/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import { Button } from "../Button";
import "./style.css";

export const Estancias = ({
  default1,
  className,
  buttonText = "Button",
  buttonDivClassName,
  buttonButtonClassName,
}) => {
  const [state, dispatch] = useReducer(reducer, {
    default2: default1 || "default",
  });

  return (
    <div
      className={`estancias ${state.default2} ${className}`}
      onMouseLeave={() => {
        dispatch("mouse_leave");
      }}
      onMouseEnter={() => {
        dispatch("mouse_enter");
      }}
      onClick={() => {
        dispatch("click");
      }}
    >
      {["default", "hover"].includes(state.default2) && (
        <Button className={buttonButtonClassName} divClassName={buttonDivClassName} text={buttonText} />
      )}

      {state.default2 === "deseable" && (
        <div
          className="button-wrapper"
          onClick={() => {
            dispatch("click_44");
          }}
          onMouseEnter={() => {
            dispatch("mouse_enter_44");
          }}
          onMouseLeave={() => {
            dispatch("mouse_leave_44");
          }}
        >
          <Button className="button-instance" text="Button" />
        </div>
      )}
    </div>
  );
};

function reducer(state, action) {
  if (state.default2 === "default") {
    switch (action) {
      case "mouse_enter":
        return {
          default2: "hover",
        };
    }
  }

  if (state.default2 === "hover") {
    switch (action) {
      case "mouse_leave":
        return {
          default2: "default",
        };

      case "mouse_leave_44":
        return {
          default2: "deseable",
        };
    }
  }

  if (state.default2 === "deseable") {
    switch (action) {
      case "mouse_enter_44":
        return {
          default2: "hover",
        };
    }
  }

  switch (action) {
    case "click":
      return {
        ...state,
        default2: "deseable",
      };

    case "click_44":
      return {
        ...state,
      };
  }

  return state;
}

Estancias.propTypes = {
  default1: PropTypes.oneOf(["hover", "deseable", "default"]),
  buttonText: PropTypes.string,
};
