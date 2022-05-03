package com.example.backend.repositories;

import com.example.backend.model.music.Author;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AuthorRepository extends JpaRepository<Author, Long> {
}