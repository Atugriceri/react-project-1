import React from "react";

const Card = ({ title, body, imgUrl }) => {
  return (
    <div className="card h-100 border-0 d-flex">
      <img src={imgUrl} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{body}</p>
      </div>
    </div>
  );
};

export default Card;
