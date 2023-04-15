package com.side.billim;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

@EnableJpaAuditing
@SpringBootApplication
public class BillimApplication {
    public static void main(String[] args) {
        SpringApplication.run(BillimApplication.class, args);
    }
}
