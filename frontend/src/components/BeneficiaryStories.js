import React, { useState, useEffect } from "react";
import StoryCard from './StoryCard';
import "./BeneficiaryStories.css"; // Create a separate CSS file for styling if needed

const BeneficiaryStories = () => {
  const [beneficiary_stories, setBeneficiaryStories] = useState([]);

  useEffect(() => {
    // Fetch beneficiary stories from your local server
    fetch("/beneficiary_stories")
      .then((response) => response.json())
      .then((data) => setBeneficiaryStories(data))
      .catch((error) =>
        console.error("Error fetching beneficiary stories:", error)
      );
  }, []);

  return (
    <section className="beneficiaryStories">
      <h3 className="beneficiaryStories__title">Beneficiary Stories</h3>
      <div className="beneficiaryStories__list">
        {beneficiary_stories.length > 0 ? (
          beneficiary_stories.map((story) => (
            <StoryCard key={story.id} story={story} />
          ))
        ) : (
          <p>No beneficiary stories available</p>
        )}
      </div>
    </section>
  );
};

export default BeneficiaryStories;
