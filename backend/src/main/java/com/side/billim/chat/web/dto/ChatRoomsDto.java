package com.side.billim.chat.web.dto;

import com.side.billim.chat.domain.ChatRoom;
import lombok.Getter;

import java.time.LocalDateTime;

@Getter
public class ChatRoomsDto {

	private Long id;
	private String productName;
	private String lastMessage;
	private LocalDateTime lastMessageDate;
	private String buyerName;

	public ChatRoomsDto(ChatRoom entity){
		this.id = entity.getId();
		this.lastMessage = entity.getLastMessage();
//		this.lastMessageDate = entity.getLastMessage();
//		this.author = entity.getAuthor();
//		this.modifiedDate = entity.getModifiedDate();
	}



}
