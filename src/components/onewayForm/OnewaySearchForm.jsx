import React, { useState, Fragment, useEffect, Children } from "react";
import dayjs from "dayjs";
import OnewayLocationFrom from "./OnewayLocationFrom";
import OnewayDateBox from "./OnewayDateBox";
import GuestsInput from "../flightSearchForm/GuestInput";
import FlightClass from "../flightSearchForm/FlightClass";
import { useNavigate } from "react-router-dom";

const OnewaySearchForm = () => {
  const navigate = useNavigate();
  const [fromCity, setFromCity] = useState(null);
  const [departDate, setDepartDate] = useState(null);
  const [guests, setGuests] = useState({
    adults: 1,
    Children: 0,
    infant: 0,
  });
  const [flightClass, setFlightClass] = useState({
    id: 2,
    value: "Y",
    label: "Economy",
  });

  const handleFromSelect = (location) => {
    setFromCity(location);
  };

  const handleDateChange = (dates) => {
    setDepartDate(dayjs(dates.startDate).format("DD MMM, YY"));
  };

  const handleGuestChange = (guest) => {
    setGuests(guest);
  };
  const handleFlightClassChange = (flightcls) => {
    setFlightClass(flightcls);
  };

  const handleSubmit = () => {
    navigate("/OnewaySearchResult");
  };

  const renderForm = () => {
    return (
      <form className="w-full relative rounded-[10px]   bg-white ">
        <div className="flex flex-1 rounded-full">
          <OnewayLocationFrom
            placeHolder="Flying To"
            desc="Where do you want to fly from?"
            className="flex-1"
            onLocationSelect={handleFromSelect}
          />

          <OnewayDateBox
            className="flex-1"
            // onSubmit={handleSubmit}
            onDateChange={handleDateChange}
          />
          <FlightClass onFlightClassChange={handleFlightClassChange} />
          <GuestsInput onGuestChange={handleGuestChange} />
          <div className="sign-btn me-3">
            <a
              onClick={handleSubmit}
              className="btn-secondary-lg cursor-pointer"
            >
              Search
            </a>
          </div>
        </div>
      </form>
    );
  };

  return renderForm();
};

export default OnewaySearchForm;
