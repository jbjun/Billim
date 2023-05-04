package com.side.billim.chat.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig implements WebMvcConfigurer {
  @Override
  public void addCorsMappings(CorsRegistry registry) {
    registry.addMapping("/**")
        .allowedOrigins("http://44.203.121.190:7777")
        .allowedMethods("GET","POST","DELETE","PUT")
        .allowedHeaders("*")
        .allowCredentials(true);
  }
}
