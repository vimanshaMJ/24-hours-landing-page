import React from "react";
import classes from "./Homepage.module.css";
import PrimaryButton from "../Components/PrimaryButton";
import icon1 from "../Images/icon-1.png";
import icon2 from "../Images/icon-2.png";
import icon3 from "../Images/icon-3.png";
import img2 from "../Images/image-2.png";

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
              <PrimaryButton buttonText={"Press Enter"} />
            </div>
          </div>
        </div>
      </div>
      <div className={`container-fluid ${classes.secondSection}`} {...props}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-10">
              <h1>Density isn't A.I, Its the result of human intelligence.</h1>
            </div>
            <div className="col-8">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
                quam sint animi cum sed ullam libero consectetur! Voluptatibus,
                pariatur fuga modi voluptate vel labore odit.
              </p>
            </div>
          </div>
          <div className={`row justify-content-center ${classes.cardRow}`}>
            <div className="col-4">
              <img src={icon1} alt="icon1" className={classes.icon} />
              <h4 className={classes.cardTitle}>Highly Responsive</h4>
              <p className={classes.cardPara}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
                explicabo laborum excepturi, ducimus nam dignissimos fugit
                accusantium cupiditate at reiciendis.
              </p>
            </div>
            <div className="col-4">
              <img src={icon2} alt="icon2" className={classes.icon} />
              <h4 className={classes.cardTitle}>Built-in Security</h4>
              <p className={classes.cardPara}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
                explicabo laborum excepturi, ducimus nam dignissimos fugit
                accusantium cupiditate at reiciendis.
              </p>
            </div>
            <div className="col-4">
              <img src={icon3} alt="icon3" className={classes.icon} />
              <h4 className={classes.cardTitle}>Safety Locked</h4>
              <p className={classes.cardPara}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
                explicabo laborum excepturi, ducimus nam dignissimos fugit
                accusantium cupiditate at reiciendis.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={`container-fluid ${classes.thirdSection}`} {...props}>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <img src={img2} alt="img2" className={classes.img2} />
            </div>
            <div className={`col-md-6 ${classes.leftRow}`}>
              <h1>Designed for Startups & Brands.</h1>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Cupiditate id voluptate dignissimos adipisci. Neque nisi dolor
                aut eos quae incidunt, perferendis provident mollitia, earum
                deserunt suscipit quidem blanditiis veritatis laboriosam!
              </p>
              <p>
                ❖ Lorem ipsum, dolor sit amet consectetur adipisicing.
                <br />
                ❖ Lorem ipsum dolor sit amet.
                <br />❖ Lorem ipsum dolor sit amet consectetur.
              </p>
              <PrimaryButton buttonText={"Lorem, ipsum."} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
