package com.side.billim.login.domain.user;

import org.springframework.data.jpa.repository.JpaRepository;

public interface ImageRepository extends JpaRepository<User, Long> {
}
