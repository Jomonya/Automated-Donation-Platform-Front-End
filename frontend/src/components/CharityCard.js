// src/components/CharityCard.js
import React from "react";
import "./CharityCard.css";
import { Link } from "react-router-dom";

const CharityCard = ({ charity }) => (
  <div className="charity-card-container">
    <img className="charity-card-image" src={charity.image} alt={charity.name} />
    <div className="charity-card-content">
      <h3 className="charity-card-title">{charity.name}</h3>
      <p className="charity-card-mission">{charity.mission_statement}</p>
      <Link to={`/donate/${charity.id}`} className="charity-card-donate-button">
        Donate
      </Link>
    </div>
  </div>
);

export default CharityCard;
