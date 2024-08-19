import React, { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Beneficiaries from "./Beneficiaries";
import BeneficiaryStories from "./BeneficiaryStories";
import "./CharityDashboard1.css";

const CharityDashboard1 = ({ user }) => {
  const [charityDetails, setCharityDetails] = useState(null);
  const [donors, setDonors] = useState([]);
  const [anonymousDonations, setAnonymousDonations] = useState(0);
  const [totalDonations, setTotalDonations] = useState(0);
  const { username, id } = user;
  const navigate = useNavigate();

  const fetchCharityDetails = useCallback(async () => {
    try {
      const response = await axios.get(`https://automated-donation-platform-backend-15.onrender.com/charities`);
      setCharityDetails(response.data);
    } catch (error) {
      console.error("Error fetching charity details:", error);
    }
  }, [id]);

  const fetchDonorData = useCallback(async () => {
    try {
      const response = await axios.get(`https://automated-donation-platform-backend-15.onrender.com/charities`);
      setDonors(response.data.donors);
      setAnonymousDonations(response.data.anonymousDonations);
      setTotalDonations(response.data.totalDonations);
    } catch (error) {
      console.error("Error fetching donor data:", error);
    }
  }, [id]);

  const fetchBeneficiaries = useCallback(async () => {
    try {
      const response = await axios.get(`https://automated-donation-platform-backend-15.onrender.com/charities`);
      
    } catch (error) {
      console.error("Error fetching beneficiaries:", error);
    }
  }, [id]);

  const fetchStories = useCallback(async () => {
    try {
      const response = await axios.get('https://automated-donation-platform-backend-15.onrender.com/charities');
      
    } catch (error) {
      console.error("Error fetching stories:", error);
    }
  }, [id]);

  useEffect(() => {
    fetchCharityDetails();
    fetchDonorData();
  }, [fetchCharityDetails, fetchDonorData]);

  const handleRegisterCharity = () => {
    navigate("/create_charity");
  };

  return (
    <div className="uniqueCharityDashboard">
      <aside className="uniqueSidebar">
        <h2 className="uniqueSidebarTitle">Navigation</h2>
        <ul className="uniqueSidebarList">
          <li className="uniqueSidebarItem"><a href="#charity-details" className="uniqueSidebarLink">Charity Details</a></li>
          <li className="uniqueSidebarItem"><a href="#donors" className="uniqueSidebarLink">Donors</a></li>
          <li className="uniqueSidebarItem"><a href="#beneficiaries" className="uniqueSidebarLink">Beneficiaries</a></li>
          <li className="uniqueSidebarItem"><a href="#stories" className="uniqueSidebarLink">Stories</a></li>
        </ul>
      </aside>

      <div className="uniqueMainContent">
        <h1 className="uniqueMainHeading">Charity Dashboard</h1>
        <p className="uniqueMainWelcome">Welcome, {username}! Here you can manage your charity details and donors.</p>

        <button className="uniqueMainButton" onClick={handleRegisterCharity}>
          Register a New Charity
        </button>

        <div id="charity-details" className="uniqueCharityDetails">
          {charityDetails && (
            <>
              <h2 className="uniqueSectionHeading">Charity Details</h2>
              <p className="uniqueSectionParagraph">Name: {charityDetails.name}</p>
              <p className="uniqueSectionParagraph">Description: {charityDetails.description}</p>
              <p className="uniqueSectionParagraph">Mission Statement: {charityDetails.mission_statement}</p>
              <p className="uniqueSectionParagraph">Goals: {charityDetails.goals}</p>
              <p className="uniqueSectionParagraph">Impact: {charityDetails.impact}</p>
              <img className="uniqueCharityImage" src={charityDetails.image} alt={`${charityDetails.name} logo`} />
            </>
          )}
        </div>

        <div id="donors" className="uniqueDonors">
          <h2 className="uniqueSectionHeading">Donors</h2>
          {donors.length > 0 ? (
            <>
              <div className="uniqueDonorSection">
                <h3 className="uniqueDonorSubHeading">Non-Anonymous Donors</h3>
                {donors.filter(donor => !donor.anonymous).map(donor => (
                  <div key={donor.id} className="uniqueDonorItem">
                    <p className="uniqueSectionParagraph">Name: {donor.name}</p>
                    <p className="uniqueSectionParagraph">Donation Amount: ${donor.amount}</p>
                  </div>
                ))}
              </div>
              <div className="uniqueDonorSection">
                <h3 className="uniqueDonorSubHeading">Anonymous Donors</h3>
                {donors.filter(donor => donor.anonymous).map(donor => (
                  <div key={donor.id} className="uniqueDonorItem">
                    <p className="uniqueSectionParagraph">Donation Amount: ${donor.amount}</p>
                  </div>
                ))}
              </div>
            </>
          ) : (
            <p className="uniqueSectionParagraph">No donors found.</p>
          )}
          <div className="uniqueTotalAmount">
            <p className="uniqueSectionParagraph">Total Donations: ${totalDonations}</p>
            <p className="uniqueSectionParagraph">Anonymous Donations: ${anonymousDonations}</p>
          </div>
        </div>

        <Beneficiaries charityId={id} fetchBeneficiaries={fetchBeneficiaries} />
        <BeneficiaryStories charityId={id} fetchStories={fetchStories} />
      </div>
    </div>
  );
};

export default CharityDashboard1;
