import React from 'react';
import './StoryCard.css'; // Assuming you have CSS for StoryCard

const StoryCard = ({ story }) => {
  return (
    <div className="storyCard">
      <h3 className="storyCard__title">{story.title}</h3>
      <p className="storyCard__description">{story.description}</p>
    </div>
  );
};

export default StoryCard;

