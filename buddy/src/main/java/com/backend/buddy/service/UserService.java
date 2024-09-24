package com.backend.buddy.service;
import com.backend.buddy.dto.LoginRequest;
import com.backend.buddy.repository.UserRepository;
import com.backend.buddy.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public User register(User user) {
        // You can add password encryption logic here
        return userRepository.save(user);
    }

    public User login(LoginRequest loginRequest) {
        User user = userRepository.findByUsernameAndPassword(loginRequest.getUsername(), loginRequest.getPassword());
        if (user != null) {
            return user;
        } else {
            throw new RuntimeException("Invalid username or password");
        }
    }
}
