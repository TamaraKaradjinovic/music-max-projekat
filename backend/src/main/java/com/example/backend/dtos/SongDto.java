package com.example.backend.dtos;

import lombok.Data;

import java.io.Serializable;
import java.util.List;

@Data
public class SongDto implements Serializable {
    private final String name;
    private final int year;
    private final String genre;
    private final String user;
    private final List<String> authors;
    private final List<String> singers;
    private final byte[] audio;
    private final byte[] video;
    private final byte[] albumCover;
}
