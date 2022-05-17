package com.example.backend.dtos;

import lombok.Data;

import java.util.List;

@Data
public class SongDtoPost {
    private final String name;
    private final int year;
    private final Long genre;
    private final List<Long> authors;
    private final List<Long> singers;
    private final byte[] audio;
    private final byte[] video;
    private final byte[] albumCover;
}
