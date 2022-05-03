package com.example.backend.dtos;

import lombok.Data;

import java.io.Serializable;
import java.util.List;

@Data
public class SongBasicDto implements Serializable {
    private final String name;
    private final int year;
    private final String genre;
    private final List<String> singers;
    private final byte[] albumCover;
}

