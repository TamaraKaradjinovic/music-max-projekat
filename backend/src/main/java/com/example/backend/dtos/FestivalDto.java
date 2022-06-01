package com.example.backend.dtos;

import lombok.Data;

import java.io.Serializable;
import java.util.Date;
import java.util.Set;

@Data
public class FestivalDto implements Serializable {
    private final Long id;
    private final String name;
    private final String description;
    private final Date startDate;
    private final Date endDate;
    private final byte[] coverPhoto;
    private final Set<CommentDto> comments;
}
