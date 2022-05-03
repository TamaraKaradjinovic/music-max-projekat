package com.example.backend.controllers;


import com.example.backend.dtos.SongBasicDto;
import com.example.backend.model.music.Genre;
import com.example.backend.model.music.Singer;
import com.example.backend.services.MusicService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@CrossOrigin(origins = "http://localhost:4200", allowCredentials = "true")
@RequestMapping(value = "/music")
public class MusicController {

    private final MusicService musicService;

    @Autowired
    public MusicController(MusicService musicService) {
        this.musicService = musicService;
    }

    @CrossOrigin(origins = "http://localhost:4200", allowCredentials = "true")
    @GetMapping("/genres")
    public List<String> getAllGenres() {
        return musicService.getAllGenres().stream().map(Genre::getName).collect(Collectors.toList());
    }

    @CrossOrigin(origins = "http://localhost:4200", allowCredentials = "true")
    @GetMapping("/songs")
    public List<SongBasicDto> getAllSongs() {
        return musicService.getAllSongsBasic();
    }

    @CrossOrigin(origins = "http://localhost:4200", allowCredentials = "true")
    @GetMapping("/singers")
    public List<String> getAllSingers(){
        return musicService.getAllSingers().stream().map(Singer::getStageName).collect(Collectors.toList());
    }
}
