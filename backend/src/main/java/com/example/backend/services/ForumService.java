package com.example.backend.services;

import com.example.backend.dtos.PostDto;
import com.example.backend.model.auth.User;
import com.example.backend.model.forum.Post;
import com.example.backend.model.forum.Topic;
import com.example.backend.repositories.PostRepository;
import com.example.backend.repositories.TopicRepository;
import com.example.backend.repositories.UserRepository;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class ForumService {

    private final TopicRepository topicRepository;
    private final UserRepository userRepository;
    private final PostRepository postRepository;

    public ForumService(TopicRepository topicRepository, UserRepository userRepository, PostRepository postRepository) {
        this.topicRepository = topicRepository;
        this.userRepository = userRepository;
        this.postRepository = postRepository;
    }

    public List<Topic> getTopics() {
        return topicRepository.findAll();
    }

    public Topic getTopic(String name) {
        return topicRepository.findByName(name);
    }

    public void addPost(PostDto dto, String name) {
        Topic topic = topicRepository.findByName(name);
        User user = userRepository.findByEmail(dto.getUserEmail()).get();

        Post post = new Post();
        post.setUser(user);
        post.setTopic(topic);
        post.setComment(dto.getComment());

        postRepository.save(post);
    }

    public void addTopic(String name) {
        Topic topic = new Topic();
        topic.setName(name);
        topic.setPosts(new ArrayList<>());

        topicRepository.save(topic);
    }
}
