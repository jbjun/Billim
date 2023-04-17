package com.side.billim.chat.web.dto;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.side.billim.chat.domain.ChatMessage;
import com.side.billim.common.utils.SecurityUtils;
import com.side.billim.login.config.auth.dto.SessionUser;
import lombok.Getter;
import org.springframework.format.annotation.DateTimeFormat;

import java.time.LocalDateTime;

@Getter
public class ChatMessageListDto {

	private Long id;
	private Long roomId;
	private String sellerId;
	private String buyerId;
	private String traderName;
	private boolean isMyMessage;
	private String message;

	@JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd HH:mm:ss")
	@DateTimeFormat(pattern = "yyyy-MM-dd HH:mm:ss")
	private LocalDateTime createdDate;


	public ChatMessageListDto(ChatMessage entity) {

		SessionUser sessionUser = (SessionUser) SecurityUtils.getSession().getAttribute("user");

		this.id = entity.getId();
		this.roomId = entity.getChatRoom().getId();
		this.message = entity.getMessage();
		this.createdDate = entity.getCreatedDate();
//
		// 전송자와 구매자 아이디 같을 경우 (동일인 경우, 판매자 아이디를 표시)
		if(entity.getUser().getId().equals(sessionUser.getId())){
			this.isMyMessage = true;
		}else{
			this.isMyMessage = false;
		}

	}

}
