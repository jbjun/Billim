package com.side.billim.chat.web.dto;

import com.side.billim.chat.domain.ChatRoom;

public class ChatRoomRequestDto {

	private long roomId;
	private long buyerId;
	private long productId;

	public ChatRoomRequestDto(ChatRoom entity){
		this.roomId = entity.getId();
		this.buyerId = entity.getUser().getId();
		this.productId = entity.getProduct().getId();
	}

}
