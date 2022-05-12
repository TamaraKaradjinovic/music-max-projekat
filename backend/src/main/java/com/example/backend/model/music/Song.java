package com.example.backend.model.music;

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

    @Column
    private double rate;

    @ManyToOne
    private Genre genre;

    @ManyToOne
    private User user;

    @ManyToMany
    private List<Author> authors;

    @ManyToMany
    private List<Singer> singers;

    @Lob
    @Column
    private byte[] audio;

    @Lob
    @Column
    private byte[] video;

    @Lob
    @Column
    private byte[] albumCover;

}
