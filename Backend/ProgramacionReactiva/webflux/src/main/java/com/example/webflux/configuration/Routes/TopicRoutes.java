package com.example.webflux.configuration.Routes;

import com.example.webflux.service.TopicHandler;
import lombok.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.MediaType;
import org.springframework.web.reactive.function.server.RouterFunction;
import org.springframework.web.reactive.function.server.RouterFunctions;
import org.springframework.web.reactive.function.server.ServerResponse;


import static org.springframework.web.reactive.function.server.RequestPredicates.*;

@Configuration
public class TopicRoutes {

    @Value("{PATH_BASE}")
    private String pathBase;

    @Bean
    public RouterFunction<ServerResponse> topicFunctionalEndpoints(TopicHandler handler) {
        return RouterFunctions
                .route(
                        POST(pathBase).and(accept(MediaType.APPLICATION_JSON)), handler::createTopic)
                .andRoute(GET(pathBase).and(accept(MediaType.APPLICATION_JSON)), handler::readTopics)
                .andRoute(GET(pathBase.concat("/{id}")).and(accept(MediaType.APPLICATION_JSON)), handler::readTopic)
                .andRoute(PUT(pathBase.concat("/{id}")).and(accept(MediaType.APPLICATION_JSON)), handler::updateTopic)
                .andRoute(DELETE(pathBase.concat("/{id}")).and(accept(MediaType.APPLICATION_JSON)),
                        handler::deleteTopic);
    }
}

