package com.example.backend.repositories;

import com.example.backend.model.music.Rate;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RateRepository extends JpaRepository<Rate, Long> {
}