import React from "react";
import { Link } from "react-router-dom";

const NewsItem = (props) => {
  let { title, description, imageUrl, newsurl, author, date } = props;
  return (
    <div>
      <div className="card my-3">
        <img
          src={imageUrl}
          style={{ height: "12rem" }}
          className="card-img-top"
          alt="/"
        />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <p className="card-text">
            <small>
              By {!author ? "Unknown" : author}, on
              {new Date(date).toGMTString()}
            </small>
          </p>
          <Link to={newsurl} target="blank" className="btn btn-sm btn-primary">
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
