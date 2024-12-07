import React from "react";
import package1 from "../assets/images/package/package-1.jpg";
import package2 from "../assets/images/package/package-2.jpg";
import package3 from "../assets/images/package/package-3.jpg";
import package4 from "../assets/images/package/package-4.jpg";
import package5 from "../assets/images/package/package-5.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "../../node_modules/swiper/swiper-bundle.min.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/bundle";
import {
  ArrowRight,
  ArrowUpRight,
  MapPin,
  PlaneLanding,
  PlaneTakeoff,
} from "lucide-react";

const BestFlightDeal = () => {
  return (
    <section className="feature-area feature-area-bg section-padding2">
      <div className="container">
        <div className="row justify-content-center position-relative z-10">
          <div className="col-xl-7 col-lg-7">
            <div className="section-title mx-430 mx-auto text-center">
              <span className="highlights fancy-font font-400">
                Best Flight Deals
              </span>
              <h4 className="title">Most Favorite Tour Place in The World</h4>
            </div>
          </div>
        </div>
        <div className="row g-4 position-relative z-10">
          <div className="swiper favSwiper-active">
            <div className="swiper-wrapper">
              <Swiper
                modules={[Autoplay, Pagination]}
                loop={true}
                spaceBetween={15}
                // slidesPerView={4}
                breakpoints={{
                  // when window width is >= 640px
                  640: {
                    slidesPerView: 1, // Show 2 slides on small devices
                  },
                  // when window width is >= 768px
                  768: {
                    slidesPerView: 3, // Show 3 slides on medium devices
                  },
                  // when window width is >= 1024px
                  1024: {
                    slidesPerView: 4, // Show 4 slides on larger devices
                  },
                  // Default (smaller than 640px)
                  0: {
                    slidesPerView: 1, // Show 1 slide on smaller devices
                  },
                }}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                }}
                // navigation={true}
              >
                <SwiperSlide>
                  <div className="swiper-slide">
                    <div className="package-card">
                      <div className="package-img imgEffect4">
                        <a href="#">
                          <img src={package1} alt="First Flight" />
                        </a>
                        <div className="image-badge">
                          <p className="pera">Direct Flight</p>
                        </div>
                      </div>
                      <div className="package-content">
                        <h4 className="area-name">
                          <MapPin size={16} />
                          <a href="#">
                            Australia
                            <ArrowRight size={16} />
                            Dubai
                          </a>
                        </h4>
                        <div className="packages-person mb-16">
                          <div className="count">
                            <PlaneTakeoff size={16} />
                            <p className="pera">Australia Sydney Airport</p>
                          </div>
                          <div className="count">
                            <PlaneLanding size={16} />
                            <p className="pera">Dubai International Airport</p>
                          </div>
                        </div>
                        <div className="price-review mb-0">
                          <div className="d-flex gap-10">
                            <p className="light-pera">Start From</p>
                            <p className="pera">$406</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="swiper-slide">
                    <div className="package-card">
                      <div className="package-img imgEffect4">
                        <a href="#">
                          <img src={package2} alt="First Flight" />
                        </a>
                        <div className="image-badge">
                          <p className="pera">Direct Flight</p>
                        </div>
                      </div>
                      <div className="package-content">
                        <h4 className="area-name">
                          <MapPin size={16} />
                          <a href="#">
                            Australia
                            <ArrowRight size={16} />
                            Mumbai, MH
                          </a>
                        </h4>
                        <div className="packages-person mb-16">
                          <div className="count">
                            <PlaneTakeoff size={16} />
                            <p className="pera">Australia Sydney Airport</p>
                          </div>
                          <div className="count">
                            <PlaneLanding size={16} />
                            <p className="pera">
                              Chhatrapati Shivaji International Airport
                            </p>
                          </div>
                        </div>
                        <div className="price-review mb-0">
                          <div className="d-flex gap-10">
                            <p className="light-pera">Start From</p>
                            <p className="pera">$128</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="swiper-slide">
                    <div className="package-card">
                      <div className="package-img imgEffect4">
                        <a href="#">
                          <img src={package3} alt="First Flight" />
                        </a>
                        <div className="image-badge">
                          <p className="pera">Direct Flight</p>
                        </div>
                      </div>
                      <div className="package-content">
                        <h4 className="area-name">
                          <MapPin size={16} />
                          <a href="#">
                            Australia
                            <ArrowRight size={16} />
                            Hyderabad
                          </a>
                        </h4>
                        <div className="packages-person mb-16">
                          <div className="count">
                            <PlaneTakeoff size={16} />
                            <p className="pera">Australia Sydney Airport</p>
                          </div>
                          <div className="count">
                            <PlaneLanding size={16} />
                            <p className="pera">
                              Rajiv Gandhi International Airport
                            </p>
                          </div>
                        </div>
                        <div className="price-review mb-0">
                          <div className="d-flex gap-10">
                            <p className="light-pera">Start From</p>
                            <p className="pera">$140</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="swiper-slide">
                    <div className="package-card">
                      <div className="package-img imgEffect4">
                        <a href="#">
                          <img src={package4} alt="First Flight" />
                        </a>
                        <div className="image-badge">
                          <p className="pera">Direct Flight</p>
                        </div>
                      </div>
                      <div className="package-content">
                        <h4 className="area-name">
                          <MapPin size={16} />
                          <a href="#">
                            Australia
                            <ArrowRight size={16} />
                            Thailand
                          </a>
                        </h4>
                        <div className="packages-person mb-16">
                          <div className="count">
                            <PlaneTakeoff size={16} />
                            <p className="pera">Australia Sydney Airport</p>
                          </div>
                          <div className="count">
                            <PlaneLanding size={16} />
                            <p className="pera">
                              Bangkok – Suvarnabhumi Airport
                            </p>
                          </div>
                        </div>
                        <div className="price-review mb-0">
                          <div className="d-flex gap-10">
                            <p className="light-pera">Start From</p>
                            <p className="pera">$140</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="swiper-slide">
                    <div className="package-card">
                      <div className="package-img imgEffect4">
                        <a href="#">
                          <img src={package5} alt="First Flight" />
                        </a>
                        <div className="image-badge">
                          <p className="pera">Direct Flight</p>
                        </div>
                      </div>
                      <div className="package-content">
                        <h4 className="area-name">
                          <MapPin size={16} />
                          <a href="#">
                            Australia
                            <ArrowRight size={16} />
                            Canada
                          </a>
                        </h4>
                        <div className="packages-person mb-16">
                          <div className="count">
                            <PlaneTakeoff size={16} />
                            <p className="pera">Australia Sydney Airport</p>
                          </div>
                          <div className="count">
                            <PlaneLanding size={16} />
                            <p className="pera">
                              Toronto International Airport
                            </p>
                          </div>
                        </div>
                        <div className="price-review mb-0">
                          <div className="d-flex gap-10">
                            <p className="light-pera">Start From</p>
                            <p className="pera">$140</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
            {/* <div className="swiper-button-next">
              <i className="ri-arrow-right-s-line"></i>
            </div>
            <div className="swiper-button-prev">
              <i className="ri-arrow-left-s-line"></i>
            </div> */}
          </div>
        </div>
        <div className="row position-relative z-10">
          <div className="col-12 text-center">
            <div className="section-button d-inline-block">
              <a href="#">
                <div className="btn-primary-icon-sm border-radius-20 py-2">
                  <p className="pera">View All Tour</p>
                  <ArrowUpRight size={20} />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BestFlightDeal;
