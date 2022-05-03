package com.example.backend.controllers;

import com.example.backend.dtos.PostDto;
import com.example.backend.dtos.TopicDto;
import com.example.backend.model.forum.Topic;
import com.example.backend.services.ForumService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200", allowCredentials = "true")
@RequestMapping(value = "/forum")
public class ForumController {

    private final ForumService forumService;

    @Autowired
    public ForumController(ForumService forumService) {
        this.forumService = forumService;
    }

    @GetMapping("/topic-names")
    public List<String> getTopics() {
        return forumService.getTopics().stream().map(Topic::getName).toList();
    }

    @PostMapping("/topic/{name}")
    public ResponseEntity addTopic(@PathVariable String name) {
        forumService.addTopic(name);
        return new ResponseEntity(HttpStatus.OK);
    }

    @GetMapping("/topic/{name}")
    public TopicDto getTopic(@PathVariable String name) {
        Topic topic = forumService.getTopic(name);
        return getTopicDto(topic);
    }

    @PostMapping("/post/{name}")
    public ResponseEntity addPost(@PathVariable String name, @RequestBody PostDto dto) {
        forumService.addPost(dto, name);
        return new ResponseEntity(HttpStatus.OK);
    }

    private TopicDto getTopicDto(Topic topic) {
        List<PostDto> posts = topic.getPosts().stream().map(x -> new PostDto(x.getComment(), x.getUser().getEmail())).toList();
        return new TopicDto(
                topic.getName(),
                posts
        );
    }

}
