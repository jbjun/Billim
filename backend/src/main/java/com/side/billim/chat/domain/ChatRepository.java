package com.side.billim.chat.domain;

import com.side.billim.chat.web.dto.ChatRoomsDto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface ChatRepository extends JpaRepository<ChatRoom, Long> {

	@Query("SELECT c FROM ChatRoom c ORDER BY c.id DESC")
	List<ChatRoom> findAllDesc();



}
