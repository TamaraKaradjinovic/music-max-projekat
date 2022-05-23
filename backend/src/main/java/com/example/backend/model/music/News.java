package com.example.backend.model.music;

import com.example.backend.model.news.Comment;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.Date;
import java.util.Set;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Entity
@Table(name = "news")
public class News {
    @Id
    @Column(name = "id", nullable = false)
    private Long id;

    @Column
    private String title;

    @Column
    private String content;

    @Enumerated(EnumType.ORDINAL)
    private NewsType type;

    @Lob
    @Column
    private byte[][] photos;

    @Lob
    @Column
    private byte[] audio;

    @Lob
    @Column
    private byte[] video;

}
