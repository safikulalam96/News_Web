import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let {title,description,imageUrl,newsurl}=this.props;
    return (
      <div>
        <div className="card my-3" style={{width: "18rem"}}>
          <img src={imageUrl} style={{height:"12rem"}} className="card-img-top" alt="/" />
          <div className="card-body">
            <h5 className="card-title">{title.slice(0,45)}...</h5>
            <p className="card-text">
                {description.slice(0,88)}...
            </p>
            <a href={newsurl} target="blank" className="btn btn-sm btn-primary">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;

// 865b740cf1314a2692aec641f4f6d6a6
