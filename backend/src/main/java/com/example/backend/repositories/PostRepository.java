package com.example.backend.repositories;

import com.example.backend.model.forum.Post;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PostRepository extends JpaRepository<Post, Long> {
}