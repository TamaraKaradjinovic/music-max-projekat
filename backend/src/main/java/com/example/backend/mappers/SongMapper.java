package com.example.backend.mappers;

import com.example.backend.dtos.SongBasicDto;
import com.example.backend.dtos.SongDto;
import com.example.backend.model.music.Author;
import com.example.backend.model.music.Singer;
import com.example.backend.model.music.Song;

import java.util.List;

public class SongMapper {

    public SongBasicDto toBasicDTO(Song song) {

        List<String> singers = song.getSingers().stream().map(
                Singer::getStageName
        ).toList();

        return new SongBasicDto(
                song.getName(),
                song.getYear(),
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

        return new SongDto(
                song.getName(),
                song.getYear(),
                song.getGenre().getName(),
                song.getUser().getEmail(),
                authors,
                singers,
                song.getAudio(),
                song.getVideo(),
                song.getAlbumCover()
        );
    }

}
