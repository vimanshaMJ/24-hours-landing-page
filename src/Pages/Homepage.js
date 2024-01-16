import React from "react";
import classes from "./Homepage.module.css";
import PrimaryButton from "../Components/PrimaryButton";

export default function Homepage({ ...props }) {
  return (
    <div>
      <div className={`container-fluid ${classes.firstSection}`} {...props}>
        <div className="container">
          <div className="row justify-content-left">
            <div className={`col-md-6  ${classes.col1}`}>
              <h1 className={classes.heading}>
                Meet Density, the visonary landing Page.
              </h1>
              <p className={classes.paragraph1}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Ducimus obcaecati temporibus voluptatem unde sunt aliquid esse
                explicabo officiis praesentium aut?
              </p>
              <PrimaryButton />
            </div>
          </div>
        </div>
      </div>
      <div className={`container-fluid ${classes.secondSection}`} {...props}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-10" style={{ border: "solid" }}>
              <h1>Density isn't A.I, Its the result of human intelligence.</h1>
            </div>
            <div className="col-8" style={{ border: "solid" }}>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
                quam sint animi cum sed ullam libero consectetur! Voluptatibus,
                pariatur fuga modi voluptate vel labore odit.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
