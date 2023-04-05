package com.side.billim.chat.web;

import com.side.billim.chat.domain.ChatMessage;
import com.side.billim.chat.web.dto.ChatMessageDto;
import lombok.RequiredArgsConstructor;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.simp.SimpMessageHeaderAccessor;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
public class WebSocketController {

	private final SimpMessagingTemplate simpMessagingTemplate;


	@MessageMapping("/chat/enter")
	public void enter(ChatMessage chatMessage) {

		System.out.println("연결성공@");

//		simpMessagingTemplate.convertAndSend("/sub/chat/room/" + 1, "채팅 참가했어요");

	}


	@MessageMapping("/chat/message")
	public void sendMessage(ChatMessageDto chatMessageDto, SimpMessageHeaderAccessor accessor) {

		System.out.println("메세지 가로채기@");

		int roomId = 1;

		// 디비 처리, 기타 예외 처리 부분

		simpMessagingTemplate.convertAndSend("/sub/chat/room/" + roomId, chatMessageDto);
	}


	/**
	 * 클라이언트의 /pub 요청을 받아 /sub 에게 보낸다
	 * 실제론 해당 블록 내에 채팅 기록 저장 등의 로직이 필요하다
	 */

}
