package com.side.billim.chat.web;

import com.side.billim.chat.domain.ChatMessage;
import com.side.billim.chat.service.ChatService;
import com.side.billim.chat.web.dto.ChatSendMessageDto;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.simp.SimpMessageHeaderAccessor;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Log4j2
@RequiredArgsConstructor
@RestController
@RequestMapping
public class WebSocketController {

	private final SimpMessagingTemplate simpMessagingTemplate;
	private final ChatService chatService;

	@MessageMapping("/chat/enter")
	public void enter(ChatMessage chatMessage) {

		System.out.println("연결성공");

//		simpMessagingTemplate.convertAndSend("/sub/chat/room/" + 1, "채팅 참가했어요");

	}

	@MessageMapping("/chat/message")
	public void sendMessage(ChatSendMessageDto chatSendMessageDto, SimpMessageHeaderAccessor accessor) {

		chatSendMessageDto = chatService.saveMessage(chatSendMessageDto);

		simpMessagingTemplate.convertAndSend("/sub/chat/room/" + chatSendMessageDto.getRoomId(), chatSendMessageDto);
	}


	/**
	 * 클라이언트의 /pub 요청을 받아 /sub 에게 보낸다
	 * 실제론 해당 블록 내에 채팅 기록 저장 등의 로직이 필요하다
	 */

}
