import React from "react";
import { ReactComponent as LandingPic } from "./assets/landing.svg";
import { NavbarComponent } from "./navbar";
import { StoryComponent } from "./storyComponent";
import { BriefComponent } from "./cvComponent";
import { ContactMe } from "./contactMe";
import { MyProjects } from "./myProjects";

const MainComponent = () => {
  return (
    <div className="mainComp">
      <NavbarComponent />
      <div className="landing pt-5">
        <div className="container">
          <div className="row flex align-center">
            <div className=" col-12 col-md-7">
              <LandingPic />
            </div>
            <div className="col-12 col-md-5 fuck mt-md-5 pt-md-5 ">
              <div className="intro pt-5 ">
                <h3 className="intro-sub">Heyy! I'm</h3>
                <h1 className="name">Firdausia Fatima</h1>
                <h3 className="intro-sub">And I love Designing.</h3>
                <p className="mt-5 d-none d-md-block">
                  I'm a passionate, die hard CODER . Persuing my B-Tech in
                  Computer Science Engineering at Jamia Millia Islamia,Delhi.
                  Code like a Pro, Live like a Legend. Analyse - Interpret -
                  Reinvent
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <BriefComponent />
      <StoryComponent />
      <MyProjects />
      <ContactMe />
    </div>
  );
};

export default MainComponent;
