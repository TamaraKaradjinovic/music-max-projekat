package com.example.backend.repositories;

import com.example.backend.model.music.Song;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface SongRepository extends JpaRepository<Song, Long> {
    Song findByName(String name);
    @Query(
            value = "SELECT user_id FROM song GROUP BY user_id ORDER BY count(*) DESC LIMIT 1",
            nativeQuery = true)
    Long getDiligent();
}