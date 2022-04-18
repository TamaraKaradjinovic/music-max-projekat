package com.example.backend.repositories;

import com.example.backend.model.auth.User;
import org.springframework.data.domain.Example;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long> {

    User findByEmailAndPassword(String email, String password);

    Optional<User> findByEmail(String email);

}