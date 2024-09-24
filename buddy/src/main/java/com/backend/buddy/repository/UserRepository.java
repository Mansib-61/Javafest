package com.backend.buddy.repository;

import com.backend.buddy.model.User;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends MongoRepository<User, String> {
    // Custom query method
    User findByUsernameAndPassword(String username, String password);
}
