package com.example.backend.model.news;

import com.example.backend.model.File;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Entity
@Table(name = "news")
public class News {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private Long id;

    @Column
    private String title;

    @Column
    private String content;


    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "festival_id")
    private Festival festival;

    @Enumerated(EnumType.ORDINAL)
    private NewsType type;

    @ManyToMany(cascade = CascadeType.ALL)
    private List<File> photos;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "audio_id")
    private File audio;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "video_id")
    private File video;

}
