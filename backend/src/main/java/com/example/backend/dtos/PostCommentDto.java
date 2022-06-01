package com.example.backend.dtos;

import lombok.Data;

import java.util.Date;

@Data
public class PostCommentDto {
    private final String text;
    private final Long festivalId;
}
