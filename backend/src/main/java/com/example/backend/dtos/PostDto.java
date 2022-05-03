package com.example.backend.dtos;

import lombok.Data;

import java.io.Serializable;

@Data
public class PostDto implements Serializable {
    private final String comment;
    private final String userEmail;
}
