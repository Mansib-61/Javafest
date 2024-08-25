import React, { useState } from 'react';
import { addReview } from '../services/api';
import './ReviewPaper.css'; // Importing the CSS file

const ReviewPaper = () => {
  const [paperId, setPaperId] = useState('');
  const [rating, setRating] = useState(1);
  const [comment, setComment] = useState('');

  const handleReview = async () => {
    const reviewData = { paperId, rating, comment };
    await addReview(reviewData);
    // Optionally redirect or show a success message
  };

  return (
    <div className="review-paper-container">
      <h2>Review Research Paper</h2>
      <input
        type="text"
        placeholder="Paper ID"
        value={paperId}
        onChange={(e) => setPaperId(e.target.value)}
      />
      <input
        type="number"
        placeholder="Rating (1-5)"
        value={rating}
        onChange={(e) => setRating(e.target.value)}
        min="1"
        max="5"
      />
      <textarea
        placeholder="Comment"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />
      <button onClick={handleReview}>Submit Review</button>
    </div>
  );
};

export default ReviewPaper;
