package com.example.backend.model.music;

import com.example.backend.model.File;
import com.example.backend.model.auth.User;
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
public class Song {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, unique = true)
    private String name;

    @Column(nullable = false)
    private int year;

    @OneToMany(mappedBy = "song" )
    private List<Rate> rates;

    @ManyToOne
    private Genre genre;

    @ManyToOne
    private User user;

    @ManyToMany
    private List<Author> authors;

    @ManyToMany
    private List<Singer> singers;

    @ManyToOne
    @JoinColumn(name = "album_cover_id")
    private File albumCover;

    @ManyToOne
    @JoinColumn(name = "audio_id")
    private File audio;

    @ManyToOne
    @JoinColumn(name = "video_id")
    private File video;


}
