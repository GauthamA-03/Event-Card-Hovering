import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Card.css";
import CalenderImage from "./Calendar.png";
import ProfileImage from "./Profile.png";
import PeopleAltSharpIcon from "@mui/icons-material/PeopleAltSharp";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import GroupsIcon from "@mui/icons-material/Groups";
import CardImage from "./CardImage.png";

const Card = () => {
  const [showOverlay, setShowOverlay] = useState(false);

  const handleMouseOver = () => {
    setShowOverlay(true);
  };

  const handleMouseOut = () => {
    setShowOverlay(false);
  };

  return (
    <div
      className="card"
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      <div className="card-body">
        <div className="badge">New</div>
        <div className="badge spaced-badge">Scheduled</div>
        <div className="card-title-container">
          <h5 className="card-title">
            Requirement of 2000 Diodes at Peenya Plant
          </h5>
          <img src={CalenderImage} alt="Calendar" className="calendar-image" />
        </div>
        <p className="card-date">Sat, 02:PM onwards</p>
      </div>
      <div className="profile-info">
        <img src={ProfileImage} alt="Profile" className="profile-image" />
        <p className="profile-text">
          Andrew Smith
          <br />
          <span className="profile-text-span">Global Foundries</span>
        </p>
      </div>
      <div className="onetoone-container">
        <div className="onetoone-circle">
          <PeopleAltSharpIcon className="onetoone-logo" />
        </div>
        <p className="onetoone-text">One To One</p>
      </div>
      {showOverlay && (
        <div className="overlay">
          <div>
            <h1 className="HShecdule">
              NET 2021 (National Entrepreneur TalkShow)
            </h1>
          </div>
          <div className="Time">
            <p> 13 Nov 2021 From 09:00 Am - 10.30 Am</p>
          </div>
          <div className="Location">
            <LocationOnIcon />
            <h1 className="Location-Text"> Bengaluru </h1>
          </div>
          <div className="Seats">
            <GroupsIcon />
            <h1 className="Seats-Text"> 100 seats </h1>
          </div>
        </div>
      )}
    </div>
  );
};

const Cards = () => {
  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-9">
          <h1 className="featured-events-heading">Featured Events</h1>
        </div>
        <div className="col-3 text-end">
          <a href="#" className="view-all-link">
            View All
          </a>
        </div>
      </div>

      <div className="row mt-3">
        <div className="col-12">
          <p className="featured-events-subtitle">
            See what's popular across thousands of Events
          </p>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <Card />
          </div>
          <div className="col-md-6">
            <Card />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
