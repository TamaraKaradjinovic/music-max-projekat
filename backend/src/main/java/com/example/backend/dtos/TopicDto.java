package com.example.backend.dtos;

import lombok.Data;

import java.io.Serializable;
import java.util.List;

@Data
public class TopicDto implements Serializable {
    private final String name;
    private final List<PostDto> posts;
}
