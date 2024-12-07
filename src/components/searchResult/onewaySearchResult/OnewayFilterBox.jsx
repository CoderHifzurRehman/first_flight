import React from "react";

const OnewayFilterBox = () => {
  return (
    <div>
      <div className="search-filter-section">
        <div className="expand-icon close-btn block d-xl-none">
          <i class="fa-solid fa-angles-left"></i>
        </div>

        <div className="heading">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M13.656 5.33333C14.3532 5.334 15.0217 5.60357 15.5147 6.08289C16.0078 6.56222 16.285 7.21213 16.2857 7.89C16.2857 8.11101 16.376 8.32298 16.5368 8.47926C16.6975 8.63554 16.9155 8.72333 17.1429 8.72333C17.3702 8.72333 17.5882 8.63554 17.7489 8.47926C17.9097 8.32298 18 8.11101 18 7.89V7.83333C18 7.8175 18 7.80333 18 7.7875C17.9714 6.68561 17.5013 5.63815 16.6898 4.86838C15.8783 4.09861 14.7897 3.6674 13.656 3.66667H12.8571V2.83333C12.8571 2.61232 12.7668 2.40036 12.6061 2.24408C12.4453 2.0878 12.2273 2 12 2C11.7727 2 11.5547 2.0878 11.3939 2.24408C11.2332 2.40036 11.1429 2.61232 11.1429 2.83333V3.66667H10.344C9.31313 3.66774 8.31625 4.02519 7.53154 4.67515C6.74683 5.3251 6.22544 6.22519 6.06056 7.21452C5.89568 8.20385 6.09807 9.21795 6.63154 10.0755C7.16501 10.9331 7.99479 11.5784 8.97257 11.8958L11.1429 12.6V18.6667H10.344C9.64677 18.666 8.97828 18.3964 8.48526 17.9171C7.99224 17.4378 7.71497 16.7879 7.71429 16.11C7.71429 15.889 7.62398 15.677 7.46323 15.5207C7.30249 15.3645 7.08447 15.2767 6.85714 15.2767C6.62981 15.2767 6.4118 15.3645 6.25105 15.5207C6.09031 15.677 6 15.889 6 16.11V16.1667C6 16.1825 6 16.1967 6 16.2125C6.02861 17.3144 6.49874 18.3618 7.3102 19.1316C8.12166 19.9014 9.21026 20.3326 10.344 20.3333H11.1429V21.1667C11.1429 21.3877 11.2332 21.5996 11.3939 21.7559C11.5547 21.9122 11.7727 22 12 22C12.2273 22 12.4453 21.9122 12.6061 21.7559C12.7668 21.5996 12.8571 21.3877 12.8571 21.1667V20.3333H13.656C14.6869 20.3323 15.6838 19.9748 16.4685 19.3249C17.2532 18.6749 17.7746 17.7748 17.9394 16.7855C18.1043 15.7961 17.9019 14.7821 17.3685 13.9245C16.835 13.0669 16.0052 12.4216 15.0274 12.1042L12.8571 11.4V5.33333H13.656ZM14.4874 13.6842C15.0801 13.8759 15.5832 14.2665 15.9066 14.786C16.2301 15.3055 16.3528 15.92 16.2527 16.5194C16.1527 17.1189 15.8365 17.6641 15.3607 18.0575C14.8849 18.451 14.2806 18.6669 13.656 18.6667H12.8571V13.1558L14.4874 13.6842ZM11.1429 10.8442L9.51429 10.3158C8.92178 10.1241 8.41878 9.73364 8.09532 9.21432C7.77185 8.695 7.64903 8.08071 7.74883 7.4814C7.84863 6.88208 8.16454 6.33685 8.64003 5.94329C9.11551 5.54972 9.71953 5.3335 10.344 5.33333H11.1429V10.8442Z"
              fill="#071516"
            />
          </svg>
          <h4 className="title">Filter By Price</h4>
        </div>
        <div className="price-range-slider">
          <div id="slider-range" className="range-bar"></div>
          <div className="d-flex justify-content-between align-items-center">
            <div className="range-value">
              <p className="pera">price: </p>{" "}
              <input type="text" id="amount" readonly />
              <div className="button-section">
                <a href="javascript:void(0)" className="apply-btn">
                  Apply
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="heading">
          <h4 className="title">Stops</h4>
        </div>
        <div className="offer-list">
          <div className="d-flex align-items-center gap-12 mb-12">
            <label className="checkbox-label">
              <input
                className="checkbox-style"
                type="checkbox"
                value="remember"
                name="remember"
              />
              <span className="checkmark-style"></span>
            </label>
            <div className="content">
              <p className="pera">Direct - from $1,553</p>
            </div>
          </div>
          <div className="d-flex align-items-center gap-12 mb-12">
            <label className="checkbox-label">
              <input
                className="checkbox-style"
                type="checkbox"
                value="remember"
                name="remember"
              />
              <span className="checkmark-style"></span>
            </label>
            <div className="content">
              <p className="pera">1 stop - from $1,298</p>
            </div>
          </div>
          <div className="d-flex align-items-center gap-12">
            <label className="checkbox-label">
              <input
                className="checkbox-style"
                type="checkbox"
                value="remember"
                name="remember"
              />
              <span className="checkmark-style"></span>
            </label>
            <div className="content">
              <p className="pera">2+ stops - from $999</p>
            </div>
          </div>
        </div>
        <div className="heading">
          <h4 className="title">Airlines</h4>
        </div>
        <div className="offer-list">
          <div className="d-flex align-items-center gap-12 mb-12">
            <label className="checkbox-label">
              <input
                className="checkbox-style"
                type="checkbox"
                value="remember"
                name="remember"
              />
              <span className="checkmark-style"></span>
            </label>
            <div className="content">
              <p className="pera">Air India - from $1,553</p>
            </div>
          </div>
          <div className="d-flex align-items-center gap-12 mb-12">
            <label className="checkbox-label">
              <input
                className="checkbox-style"
                type="checkbox"
                value="remember"
                name="remember"
              />
              <span className="checkmark-style"></span>
            </label>
            <div className="content">
              <p className="pera">AirAsia X - from $1,654</p>
            </div>
          </div>
          <div className="d-flex align-items-center gap-12 mb-12">
            <label className="checkbox-label">
              <input
                className="checkbox-style"
                type="checkbox"
                value="remember"
                name="remember"
              />
              <span className="checkmark-style"></span>
            </label>
            <div className="content">
              <p className="pera">BatikAir Malaysia - from $3,155</p>
            </div>
          </div>
          <div className="d-flex align-items-center gap-12">
            <label className="checkbox-label">
              <input
                className="checkbox-style"
                type="checkbox"
                value="remember"
                name="remember"
              />
              <span className="checkmark-style"></span>
            </label>
            <div className="content">
              <p className="pera">Cathay Pacific - from $1,298</p>
            </div>
          </div>
        </div>
      </div>
      <div class="cover"></div>
    </div>
  );
};

export default OnewayFilterBox;
