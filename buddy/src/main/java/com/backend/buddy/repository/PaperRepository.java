package com.backend.buddy.repository;

import com.backend.buddy.model.Paper;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface PaperRepository extends MongoRepository<Paper, String> {
    // Find papers by category
    List<Paper> findByCategory(String category);

    // Find papers by subject
    List<Paper> findBySubject(String subject);

    // Optionally, find papers by both category and subject
    List<Paper> findByCategoryAndSubject(String category, String subject);
}
