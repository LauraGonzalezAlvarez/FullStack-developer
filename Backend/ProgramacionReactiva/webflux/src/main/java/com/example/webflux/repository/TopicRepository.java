package com.example.webflux.repository;

import com.example.webflux.model.Topic;
import org.springframework.data.repository.reactive.ReactiveCrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TopicRepository extends ReactiveCrudRepository<Topic,Integer> {
}
