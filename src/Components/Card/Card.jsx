import React from "react";
import "./style.scss";

const Card = ({ image, alt, name, email }) => {
  return (
    <>
      <div className="card">
        <div className="card__userimg">
          <img className="profile" src={image} alt={alt} />
        </div>
        <div className="card__userinfo">
          <div className="user-name">{name}</div>
          <div className="user-email">{email}</div>
        </div>
      </div>
    </>
  );
};

export default Card;
