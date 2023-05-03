package com.side.billim.chat.web.dto;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.side.billim.chat.domain.ChatRoom;
import lombok.Getter;
import org.springframework.format.annotation.DateTimeFormat;

import java.time.LocalDateTime;

@Getter
public class ChatRoomDto {

	private Long id;
	private String productName;
	private String lastMessage;

	@JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd HH:mm:ss")
	@DateTimeFormat(pattern = "yyyy-MM-dd HH:mm:ss")
	private LocalDateTime lastMessageDate;

	private String traderName; // 거래자 아이디

	public ChatRoomDto(ChatRoom entity){
		this.id = entity.getId();
		this.lastMessage = entity.getChatMessages().get(0).getMessage();
		this.lastMessageDate = entity.getChatMessages().get(0).getCreatedDate();
		this.productName = entity.getProduct().getProductName();

		if(entity.getUser().getId() == 2){
			this.traderName = entity.getUser().getName();
		}else{
			this.traderName = entity.getProduct().getUser().getName();
		}
	}

}
