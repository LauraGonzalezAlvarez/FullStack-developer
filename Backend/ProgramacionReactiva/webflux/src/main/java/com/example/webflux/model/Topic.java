package com.example.webflux.model;

import lombok.Builder;
import lombok.Data;
import org.springframework.data.annotation.Id;
@Data
@Builder
public class Topic {
    @Id
    private Integer id;
    private String name;
    private String description;
}
