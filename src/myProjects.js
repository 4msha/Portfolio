import React from "react";
import { ReactComponent as Tripplin } from "./assets/triplin2.svg";
import { ReactComponent as Chat } from "./assets/chat2.svg";

export const MyProjects = () => {
  return (
    <div className="conatainer p-5 m-2">
      <h2 className="name">MY Projects </h2>
      <h5>See what I've made .</h5>
      <div className="row">
        <div className="col-12 col-md-6 outline">
          <div>
            <a href="https://secure-cliffs-38547.herokuapp.com/">
              <Tripplin className="project" />
            </a>
            <p className="name">Tripplin</p>
          </div>
        </div>
        <div className="col-12 col-md-6 outline">
          <div>
            <a href="https://5eba26581787f2f664cc35a4--nervous-edison-43bb6e.netlify.app/">
              <Chat className="project" />
            </a>
            <p className="name">Chat Application</p>
          </div>
        </div>
      </div>
    </div>
  );
};
