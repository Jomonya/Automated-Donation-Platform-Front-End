import React from 'react';
import './StoryCard.css'; // Ensure you have appropriate CSS for StoryCard

const StoryCard = ({ story }) => {
  return (
    <div className="storyCard">
      <div className="storyCard__imageContainer">
        <img src={story.image_url} alt={story.title} className="storyCard__image" />
      </div>
      <div className="storyCard__content">
        <h3 className="storyCard__title">{story.title}</h3>
        <p className="storyCard__description">{story.content}</p>
      </div>
    </div>
  );
};

export default StoryCard;
