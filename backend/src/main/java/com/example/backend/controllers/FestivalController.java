package com.example.backend.controllers;

import com.example.backend.dtos.PostCommentDto;
import com.example.backend.model.File;
import com.example.backend.model.auth.User;
import com.example.backend.model.news.Comment;
import com.example.backend.dtos.CommentDto;
import com.example.backend.model.news.Festival;
import com.example.backend.dtos.FestivalDto;
import com.example.backend.model.news.News;
import com.example.backend.model.news.NewsDto;
import com.example.backend.services.AuthService;
import com.example.backend.services.FestivalService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashSet;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@CrossOrigin(origins = "http://localhost:4200", allowCredentials = "true")
@RequestMapping(value = "/festival")
public class FestivalController {

    private final FestivalService festivalService;
    private final AuthService authService;

    @Autowired
    public FestivalController(FestivalService festivalService, AuthService authService) {
        this.festivalService = festivalService;
        this.authService = authService;
    }

    @GetMapping("/news")
    public List<NewsDto> getNews() {
        return festivalService.getNews().stream().map(this::mapToDto).collect(Collectors.toList());
    }

    @GetMapping("/past-festivals")
    public List<FestivalDto> getPastFestivals() {
        return festivalService.getPastFestivals().stream().map(this::mapToDto).collect(Collectors.toList());
    }

    @GetMapping("/ongoing-festivals")
    public List<FestivalDto> getOngoingFestivals() {
        return festivalService.getOngoingFestivals().stream().map(this::mapToDto).collect(Collectors.toList());
    }
    @PostMapping("/comment")
    public ResponseEntity addTopic(@RequestBody PostCommentDto dto, HttpServletRequest request) {

        String email = authService.getUserEmail(request.getCookies()[1]);
        User user = authService.findUserByEmail(email);

        Festival festival = festivalService.findById(dto.getFestivalId());

        Comment comment = new Comment();
        comment.setText(dto.getText());
        comment.setDate(new Date());
        comment.setUser(user);
        comment.setFestival(festival);

        festivalService.addComment(comment);
        return new ResponseEntity(HttpStatus.OK);
    }
    @PostMapping("/news")
    public ResponseEntity addNews(@RequestBody NewsDto dto) {

        File photo = new File();
        photo.setFile(dto.getFestival().getCoverPhoto());

        Festival festival = new Festival();
        festival.setName(dto.getFestival().getName());
        festival.setStartDate(dto.getFestival().getStartDate());
        festival.setEndDate(dto.getFestival().getEndDate());
        festival.setDescription(dto.getFestival().getDescription());
        festival.setCoverPhoto(photo);
        festival.setComments(new HashSet<>());

        File audio = new File();
        audio.setFile(dto.getAudio());
        File video = new File();
        video.setFile(dto.getVideo());
        List<File> photos = new ArrayList<>();

        for (int i = 0; i < dto.getPhotos().size(); i++) {
            File f = new File();
            f.setFile(dto.getPhotos().get(i));
            photos.add(f);
        }

        News news = new News();
        news.setTitle(dto.getTitle());
        news.setContent(dto.getContent());
        news.setAudio(audio);
        news.setVideo(video);
        news.setPhotos(photos);
        news.setFestival(festival);

        festivalService.addNews(news);

        return new ResponseEntity(HttpStatus.OK);
    }
    private NewsDto mapToDto(News news) {
        FestivalDto festivalDto = null;
        if (news.getFestival() != null)
            festivalDto = mapToDto(news.getFestival());

        byte[] audio = null;
        if (news.getAudio() != null)
            audio = news.getAudio().getFile();

        byte[] video = null;
        if (news.getVideo() != null)
            video = news.getVideo().getFile();

        return new NewsDto(
                news.getTitle(),
                news.getContent(),
                festivalDto,
                news.getPhotos().stream().map(File::getFile).collect(Collectors.toList()),
                audio,
                video
        );
    }
    private FestivalDto mapToDto(Festival festival) {
        return new FestivalDto(
          festival.getId(),
          festival.getName(),
          festival.getDescription(),
          festival.getStartDate(),
          festival.getEndDate(),
          festival.getCoverPhoto().getFile(),
          festival.getComments().stream().map(this::mapToDto).collect(Collectors.toSet())
        );
    }

    private CommentDto mapToDto(Comment comment) {
        return new CommentDto(
                comment.getUser().getEmail(),
                comment.getText(),
                comment.getDate()
        );
    }

}
