package com.example.backend.dtos;

import lombok.Data;

import java.io.Serializable;
import java.util.Date;

@Data
public class CommentDto implements Serializable {
    private final String user;
    private final String text;
    private final Date date;
}
