import React from "react";

import airIndia from "../../../assets/images/logo/AI.png";

const OnewayResultCard = () => {
  return (
    <div>
      <div className="package-card mt-3">
        <div className="package-content">
          <div className="location">
            <img src={airIndia} />
            <div className="name">
              {" "}
              <i class="fa-solid fa-plane-departure"></i> <b>Air India</b>
            </div>
          </div>
          <div className="packages-person">
            <div className="count">
              <i class="fa-regular fa-clock"></i>
              <p className="pera">14:20 DEL - 07:10 SYD</p>
            </div>
            <div className="count">
              <p className="pera">17 deals from</p>
              <br />
              <h4>$1,553</h4>
              <br />
              <p className="pera">$3,106 total</p>
              <br />
              <a href="#">
                <div className="px-3 py-2 rounded-md bg-primary-6000 text-white">
                  <span className="text-sm">Select</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnewayResultCard;
