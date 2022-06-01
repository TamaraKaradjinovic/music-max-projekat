package com.example.backend.services;

import com.example.backend.model.news.Comment;
import com.example.backend.model.news.News;
import com.example.backend.repositories.CommentRepository;
import com.example.backend.model.news.Festival;
import com.example.backend.repositories.FestivalRepository;
import com.example.backend.repositories.NewsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class FestivalService {

    private final FestivalRepository festivalRepository;
    private final CommentRepository commentRepository;
    private final NewsRepository newsRepository;

    @Autowired
    public FestivalService(FestivalRepository festivalRepository, CommentRepository commentRepository, NewsRepository newsRepository) {
        this.festivalRepository = festivalRepository;
        this.commentRepository = commentRepository;
        this.newsRepository = newsRepository;
    }

    public List<News> getNews() {
        return newsRepository.findAll();
    }

    public List<Festival> getFestivals() {
        return festivalRepository.findAll();
    }

    public List<Festival> getPastFestivals() {
        return festivalRepository.findAll().stream()
                .filter(
                    x -> x.getEndDate().compareTo(new Date()) < 0
                )
                .collect(Collectors.toList());
    }


    public List<Festival> getOngoingFestivals() {
        return festivalRepository.findAll().stream().filter(
                x -> x.getEndDate().compareTo(new Date()) >= 0
        ).collect(Collectors.toList());
    }

    public Festival findById(Long festivalId) {
        return festivalRepository.getById(festivalId);
    }

    public void addComment(Comment comment) {
        commentRepository.save(comment);
    }

    public void addNews(News news) {
        newsRepository.save(news);
    }
}
