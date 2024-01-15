import React from "react";
import classes from "./Homepage.module.css";

export default function Homepage({ ...props }) {
  return (
    <div>
      <div className={`container-fluid ${classes.firstSection}`} {...props}>
        <div className="container">
          <div
            className={`row justify-content-left ${classes.col1}`}
            {...props}
          >
            <div className="col-6">
              <h1 className={classes.heading}>
                Meet Density, the visonary landing Page.
              </h1>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Ducimus obcaecati temporibus voluptatem unde sunt aliquid esse
                explicabo officiis praesentium aut?
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
