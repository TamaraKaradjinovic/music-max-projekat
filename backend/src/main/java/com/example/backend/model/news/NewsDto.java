package com.example.backend.model.news;

import com.example.backend.dtos.FestivalDto;
import lombok.Data;

import java.io.Serializable;
import java.util.List;

@Data
public class NewsDto implements Serializable {
    private final String title;
    private final String content;
    private final FestivalDto festival;
    private final List<byte[]> photos;
    private final byte[] audio;
    private final byte[] video;
}
