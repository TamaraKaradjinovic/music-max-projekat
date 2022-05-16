package com.example.backend.repositories;

import com.example.backend.model.music.Song;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SongRepository extends JpaRepository<Song, Long> {
    Song findByName(String name);
}