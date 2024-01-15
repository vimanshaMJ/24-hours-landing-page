import React from "react";
import classes from "./Homepage.module.css";

export default function Homepage({ ...props }) {
  return (
    <div>
      <div
        className={`container-fluid ${classes.firstSection}`}
        {...props}
      ></div>
    </div>
  );
}
