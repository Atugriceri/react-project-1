import React from "react";

const BlogSection = props => {
  const { alignImg, title, body, imgSrc } = props;

  if (alignImg === "left") {
    return (
      <div className="row mt-5 align-items-center">
        <div className="col-md-6">
          <img src={imgSrc ? imgSrc : null} className="w-100" />
        </div>
        <div className="col-md-6">
          <h2>{title ? title : ""}</h2>
          <p>{body ? body : ""}</p>
        </div>
      </div>
    );
  } else {
    return (
      <div className="row mt-5 align-items-center">
        <div className="col-md-6">
          <h2>{title ? title : ""}</h2>
          <p>{body ? body : ""}</p>
        </div>
        <div className="col-md-6">
          <img src={imgSrc ? imgSrc : null} className="w-100" />
        </div>
      </div>
    );
  }
};

export default BlogSection;
