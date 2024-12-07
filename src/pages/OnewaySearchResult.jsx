import React, { useState } from "react";
import FlightBreadcrumb from "../components/FlightBreadcrumb";
import OnewayFilterBox from "../components/searchResult/onewaySearchResult/OnewayFilterBox";
import OnewayResultCard from "../components/searchResult/onewaySearchResult/OnewayResultCard";

const OnewaySearchResult = () => {
  const [activeBox, setActiveBox] = useState(null);
  return (
    <div>
      <FlightBreadcrumb />
      <div className="tour-list-section section-padding2">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <OnewayFilterBox />
            </div>
            <div className="col-lg-9">
              <div class="showing-result">
                <h4 class="title">Showing 6 of 10 Results</h4>
                <div class="d-flex gap-10 align-items-center">
                  <div
                    class="expand-icon hamburger flex d-xl-none"
                    id="hamburger"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M3 7H10M10 7C10 8.65685 11.3431 10 13 10H14C15.6569 10 17 8.65685 17 7C17 5.34315 15.6569 4 14 4H13C11.3431 4 10 5.34315 10 7ZM16 17H21M20 7H21M3 17H6M6 17C6 18.6569 7.34315 20 9 20H10C11.6569 20 13 18.6569 13 17C13 15.3431 11.6569 14 10 14H9C7.34315 14 6 15.3431 6 17Z"
                        stroke="#071516"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                  <div class="sorting-dropdown">
                    <select class="select2">
                      <option value="popular"> Sort by Popular</option>
                      <option value="low">Price low to high</option>
                      <option value="high">Price high to low</option>
                      <option value="new">Sort by Newset</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="flex flex-grow space-x-4">
                {/* Best Box */}
                <div
                  className={`flex-grow cursor-pointer px-4 py-2 rounded-lg text-center ${
                    activeBox === "Best"
                      ? "bg-primary-6000 text-white"
                      : "bg-gray-200 text-black"
                  }`}
                  onClick={() => setActiveBox("Best")}
                >
                  <span>Best $8400</span>
                </div>

                {/* Cheapest Box */}
                <div
                  className={`flex-grow cursor-pointer px-4 py-2 rounded-lg text-center ${
                    activeBox === "Cheapest"
                      ? "bg-primary-6000 text-white"
                      : "bg-gray-200 text-black"
                  }`}
                  onClick={() => setActiveBox("Cheapest")}
                >
                  <span>Cheapest $8400</span>
                </div>

                {/* Fastest Box */}
                <div
                  className={`flex-grow cursor-pointer px-4 py-2 rounded-lg text-center ${
                    activeBox === "Fastest"
                      ? "bg-primary-6000 text-white"
                      : "bg-gray-200 text-black"
                  }`}
                  onClick={() => setActiveBox("Fastest")}
                >
                  <span>Fastest $8400</span>
                </div>
              </div>

              {[1, 2, 3, 4, 5].map((i) => (
                <OnewayResultCard key={i} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnewaySearchResult;
