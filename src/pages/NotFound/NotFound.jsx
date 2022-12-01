import React from "react";
import { Link } from "react-router-dom";
import { homeURL } from "../../utils/paths";
import "./style.scss";
import { images } from "../../images";
import Tilt from "react-parallax-tilt";

const NotFound = () => {
  return (
    <section className="my_container">
      <div className="notfound">
        <Tilt tiltMaxAngleX={[(0, 5)]} tiltMaxAngleY={[(0, 5)]}>
          <div className="glassmorp">
            <img
              className="notfound__img"
              src={images.error.image}
              alt={images.error.alt}
              loading="lazy"
            />
            <h1 className="notfound__heading">404</h1>
            <p className="notfound__redirection">
              Go back to&nbsp;
              <Link to={homeURL}>Home</Link>.
            </p>
          </div>
        </Tilt>
      </div>
    </section>
  );
};

export default NotFound;
