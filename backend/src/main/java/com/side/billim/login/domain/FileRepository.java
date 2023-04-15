package com.side.billim.login.domain;

import com.side.billim.login.domain.user.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FileRepository extends JpaRepository<User, Long> {
}
