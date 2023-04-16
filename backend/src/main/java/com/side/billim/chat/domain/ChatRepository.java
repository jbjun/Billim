package com.side.billim.chat.domain;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface ChatRepository extends JpaRepository<ChatRoom, Long> {

//	@Query("SELECT c, (select MAX(cm.createdDate) from ChatMessage cm WHERE c.id = cm.id ORDER BY cm.createdDate) FROM ChatRoom c JOIN FETCH c.product JOIN FETCH c.user")
	@Query("SELECT c FROM ChatRoom c JOIN FETCH c.product p JOIN FETCH c.user u JOIN FETCH c.chatMessages cm WHERE cm.id = (SELECT MAX(cm2.id) FROM ChatMessage cm2 WHERE cm2.room = c)")
	List<ChatRoom> findChatRoomList();

//	@Query("SELECT c FROM ChatRoom c JOIN FETCH c.product p JOIN FETCH c.user u JOIN FETCH c.chatMessages cm WHERE cm.id = (SELECT MAX(cm2.id) FROM ChatMessage cm2 WHERE cm2.room = c) AND (c.user = :id OR p.user = :id)")
//	List<ChatRoom> findChatRoomList(@Param("id") long id);



}
