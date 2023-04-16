package com.side.billim.chat.domain;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface ChatRepository extends JpaRepository<ChatRoom, Long> {

	@Query("SELECT c FROM ChatRoom c JOIN FETCH Product p " +
			"ORDER BY c.id DESC")
	List<ChatRoom> findAllDesc();



}
