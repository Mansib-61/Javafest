package com.backend.buddy.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.backend.buddy.dto.ReviewRequest;
import com.backend.buddy.model.Review;
import com.backend.buddy.repository.ReviewRepository;

@Service
public class ReviewService {

    @Autowired
    private ReviewRepository reviewRepository;

    public Review saveReview(ReviewRequest reviewRequest) {
        Review review = new Review();
        review.setPaperId(reviewRequest.getPaperId());
        review.setRating(reviewRequest.getRating());
        review.setComment(reviewRequest.getComment());
        return reviewRepository.save(review);
    }
}