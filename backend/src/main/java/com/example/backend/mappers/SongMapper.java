package com.example.backend.mappers;

import com.example.backend.dtos.SongBasicDto;
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
}
