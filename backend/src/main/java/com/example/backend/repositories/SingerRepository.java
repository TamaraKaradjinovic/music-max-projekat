package com.example.backend.repositories;

import com.example.backend.model.music.Singer;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Set;

public interface SingerRepository extends JpaRepository<Singer, Long> {

}