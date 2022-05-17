package com.example.backend.mappers;

import com.example.backend.dtos.SongBasicDto;
import com.example.backend.dtos.SongDto;
import com.example.backend.dtos.SongDtoPost;
import com.example.backend.model.auth.User;
import com.example.backend.model.music.*;
import com.example.backend.repositories.AuthorRepository;
import com.example.backend.repositories.GenreRepository;
import com.example.backend.repositories.SingerRepository;
import com.example.backend.repositories.SongRepository;
import com.example.backend.services.MusicService;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.ArrayList;
import java.util.List;
import java.util.Set;

public class SongMapper {

    private final MusicService musicService;

    public SongMapper(MusicService musicService) {
        this.musicService = musicService;
    }

    public SongBasicDto toBasicDTO(Song song) {

        List<String> singers = song.getSingers().stream().map(
                Singer::getStageName
        ).toList();

        List<Rate> rates = song.getRates();
        double avg = 0;
        for (Rate r: rates) {
            avg += r.getRate();
        }
        avg = avg / rates.size();

        return new SongBasicDto(
                song.getName(),
                song.getYear(),
                avg,
                song.getGenre().getName(),
                singers,
                song.getAlbumCover()
        );
    }

    public SongDto toDTO(Song song) {


        List<String> authors = song.getAuthors().stream().map(
                Author::getStageName
        ).toList();

        List<String> singers = song.getSingers().stream().map(
                Singer::getStageName
        ).toList();

        List<Rate> rates = song.getRates();
        double avg = 0;
        for (Rate r: rates) {
            avg += r.getRate();
        }
        avg = avg / rates.size();

        return new SongDto(
                song.getName(),
                song.getYear(),
                avg,
                song.getGenre().getName(),
                song.getUser().getEmail(),
                authors,
                singers,
                song.getAudio(),
                song.getVideo(),
                song.getAlbumCover()
        );
    }

    public Song mapToSong(SongDtoPost dto, User user) {

        Genre genre = musicService.getGenreById(dto.getGenre());
        List<Singer> singers = musicService.getSingersByIds(dto.getSingers());
        List<Author> authors = musicService.getAuthorsByIds(dto.getSingers());

        Song newSong = new Song();

        newSong.setName(dto.getName());
        newSong.setYear(dto.getYear());
        newSong.setRates(new ArrayList<>());
        newSong.setAudio(dto.getAudio());
        newSong.setVideo(dto.getVideo());
        newSong.setAlbumCover(dto.getAlbumCover());

        newSong.setGenre(genre);
        newSong.setSingers(singers);
        newSong.setAuthors(authors);

        newSong.setUser(user);

        return newSong;
    }
}
