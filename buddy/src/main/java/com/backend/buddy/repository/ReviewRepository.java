package com.backend.buddy.repository;

import com.backend.buddy.model.Review;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface ReviewRepository extends MongoRepository<Review, String> {
    // Find all reviews for a specific paper by paperId
    List<Review> findByPaperId(String paperId);
    
    // Optionally, find reviews by rating (e.g., to get highly-rated papers)
    List<Review> findByRating(int rating);
}
