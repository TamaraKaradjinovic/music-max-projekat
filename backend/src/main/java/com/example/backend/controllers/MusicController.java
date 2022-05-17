package com.example.backend.controllers;

import com.example.backend.dtos.AccountDto;
import com.example.backend.dtos.SongBasicDto;
import com.example.backend.dtos.SongDto;
import com.example.backend.dtos.SongDtoPost;
import com.example.backend.mappers.SongMapper;
import com.example.backend.model.auth.Account;
import com.example.backend.model.auth.User;
import com.example.backend.model.music.Author;
import com.example.backend.model.music.Genre;
import com.example.backend.model.music.Singer;
import com.example.backend.model.music.Song;
import com.example.backend.services.AuthService;
import com.example.backend.services.MusicService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@CrossOrigin(origins = "http://localhost:4200", allowCredentials = "true")
@RequestMapping(value = "/music")
public class MusicController {

    private final MusicService musicService;

    private final AuthService authService;

    private final SongMapper songMapper;

    @Autowired
    public MusicController(MusicService musicService, AuthService authService) {
        this.musicService = musicService;
        songMapper = new SongMapper(musicService);
        this.authService = authService;
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

    @CrossOrigin(origins = "http://localhost:4200", allowCredentials = "true")
    @GetMapping("/song/{name}")
    public SongDto getSong(@PathVariable String name) {
        Song song = musicService.getSong(name);
        return songMapper.toDTO(song);
    }

    @CrossOrigin(origins = "http://localhost:4200", allowCredentials = "true")
    @PostMapping("/song")
    public SongDto getSong(@RequestBody SongDtoPost dto, HttpServletRequest request) {

        String email = authService.getUserEmail(request.getCookies()[1]);
        User user = authService.findUserByEmail(email);
        Song song = songMapper.mapToSong(dto, user);

        musicService.addSong(song);
        return songMapper.toDTO(song);
    }


    @CrossOrigin(origins = "http://localhost:4200", allowCredentials = "true")
    @GetMapping("/id-genres")
    public List<Genre> getAllIdGenres() {
        return musicService.getAllGenres();
    }

    @CrossOrigin(origins = "http://localhost:4200", allowCredentials = "true")
    @GetMapping("/id-singers")
    public List<Singer> getAllIdSingers() {
        return musicService.getAllSingers();
    }

    @CrossOrigin(origins = "http://localhost:4200", allowCredentials = "true")
    @GetMapping("/id-authors")
    public List<Author> getAllIdAuthors() {
        return musicService.getAllAuthors();
    }

    @CrossOrigin(origins = "http://localhost:4200", allowCredentials = "true")
    @GetMapping("/top-songs")
    public List<SongBasicDto> getTopList() {
        return musicService.getTopList();
    }


    @CrossOrigin(origins = "http://localhost:4200", allowCredentials = "true")
    @GetMapping("/diligent-account")
    public AccountDto getDiligentUser() {
        Account acc = authService.findAccountByUserId(musicService.getDiligentUserId());
        return new AccountDto(acc.getUser().getEmail(), acc.getName(), acc.getSurname());
    }


}
