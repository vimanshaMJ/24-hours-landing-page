import React from "react";
import Button from "react-bootstrap/Button";
import classes from "./PrimaryButton.module.css";

export default function PrimaryButton() {
  return (
    <div>
      <Button variant="primary" className={classes.actionBtn}>
        Press Enter
      </Button>{" "}
    </div>
  );
}
