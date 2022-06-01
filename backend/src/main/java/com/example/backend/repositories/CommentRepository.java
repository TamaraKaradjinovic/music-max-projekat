package com.example.backend.repositories;

import com.example.backend.model.news.Comment;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CommentRepository extends JpaRepository<Comment, Long> {
}