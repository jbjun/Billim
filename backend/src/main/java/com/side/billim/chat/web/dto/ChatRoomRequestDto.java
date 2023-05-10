package com.side.billim.chat.web.dto;

import com.side.billim.chat.domain.ChatRoom;
import com.side.billim.login.domain.user.User;
import com.side.billim.product.domain.Product;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@NoArgsConstructor
public class ChatRoomRequestDto {

	private Long roomId = null;

	@Setter
	private Long buyerId = null;
	private Long productId = null;

	public ChatRoomRequestDto(ChatRoom entity){
		this.roomId = entity.getId();
		this.buyerId = entity.getUser().getId();
		this.productId = entity.getProduct().getId();
	}

	@Builder
	public ChatRoomRequestDto(Long roomId, Long buyerId, Long productId){
		this.roomId = roomId;
		this.buyerId = buyerId;
		this.productId = productId;
	}

	public ChatRoom toEntity(){
		return ChatRoom.builder()
				.user(new User(buyerId))
				.product(new Product(productId))
				.build();
	}

}
