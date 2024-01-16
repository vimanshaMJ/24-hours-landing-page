import React from "react";
import Button from "react-bootstrap/Button";
import classes from "./PrimaryButton.module.css";

export default function PrimaryButton({ buttonText }) {
  return (
    <div>
      <Button variant="primary" className={classes.actionBtn}>
        {buttonText}
      </Button>{" "}
    </div>
  );
}
