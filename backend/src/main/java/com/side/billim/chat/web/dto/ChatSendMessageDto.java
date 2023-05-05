package com.side.billim.chat.web.dto;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Getter;
import lombok.Setter;
import org.springframework.format.annotation.DateTimeFormat;

import java.time.LocalDateTime;

@Getter
@Setter
public class ChatSendMessageDto {

	private Long id;
	private Long roomId;
	private Long userId;
	private String message;
	private String nickName;

	@JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd HH:mm:ss")
	@DateTimeFormat(pattern = "yyyy-MM-dd HH:mm:ss")
	private LocalDateTime createdDate;



//	public ChatMessage toEntity(){
//		return ChatMessage.builder()
//				.chatRoom(new ChatRoom(roomId))
//				.content(content)
//				.author(author)
//				.build();
//	}

}
