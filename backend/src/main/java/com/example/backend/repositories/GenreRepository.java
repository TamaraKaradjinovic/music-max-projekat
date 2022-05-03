package com.example.backend.repositories;

import com.example.backend.model.music.Genre;
import org.springframework.data.jpa.repository.JpaRepository;

public interface GenreRepository extends JpaRepository<Genre, Long> {
}