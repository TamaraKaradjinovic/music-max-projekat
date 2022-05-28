package com.example.backend.model.news;

import com.example.backend.model.auth.User;
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
@Table(name = "festival")
public class Festival {
    @Id
    @Column(name = "id", nullable = false)
    private Long id;

    @Column
    private String name;

    @Column
    private String description;

    @Column
    private Date startDate;

    @Column
    private Date endDate;

    @Lob
    @Column
    private byte[] coverPhoto;

    @OneToMany(mappedBy = "festival" )
    private Set<Comment> comments;

}