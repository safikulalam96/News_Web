import React from "react";
import { Shimmer } from "react-shimmer";

const ShimmerCard = () => {
  return (
    <div className="row">
      {[1, 2, 3].map((index) => (
        <div key={index} className="col-md-4">
          <div className="card mb-4 shadow-sm">
            <Shimmer width={250} height={150} />
            <div className="card-body">
              <h5>
                <Shimmer width={200} />
              </h5>
              <p className="card-text">
                <Shimmer width={250} />
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ShimmerCard;
