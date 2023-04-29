package com.side.billim.login.domain.user;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserChkRepository extends JpaRepository<User, Long> {
   boolean existsByNickname(String nickname);
}
