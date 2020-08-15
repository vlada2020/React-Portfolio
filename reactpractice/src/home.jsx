import React from "react";
import web from "../src/images/table.jpg";
import { NavLink } from "react-router-dom";
const Home = () => {
  return (
    <>
      <section id="header" className="d-flex align-items-center">
        <div className="container-fluid nav_bg">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-md-6 pt-5 pt-lg-0 mt-5 order-2 order-lg-1 d-flex align-items-center justify-content-center flex-column">
                  <h1>
                  <h1>{"every portfolio tells a story"}</h1>
                  </h1>
                  <h2 className="my-3">Self Motivated And Always Creative</h2>
                  <div className="mt-3"></div>
                  <NavLink to="/Project" className="btn-my-story">
                   
                    My Story
                  </NavLink>
                </div>
              </div>
              <div className="col-lg-6 order-1 order-lg-2 header-img">
                <img src={web} className="img-fluid animated" className="m-auto" alt="home image" justify= "absolute" />
                  </div>
              </div>
            </div>
          </div>
      </section>
    </>
  );
};
export default Home;