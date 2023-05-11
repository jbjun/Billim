package com.side.billim.chat.web;

import com.side.billim.chat.service.ChatService;
import com.side.billim.chat.web.dto.ChatMessageDto;
import com.side.billim.chat.web.dto.ChatRoomDto;
import com.side.billim.chat.web.dto.ChatSendMessageDto;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Log4j2
@RequiredArgsConstructor
@RestController
@RequestMapping
@CrossOrigin(origins="*", allowedHeaders = "*")
public class ChatController {

	private final ChatService chatService;

	@Operation(summary = "채팅방 리스트", description = "로그인한 회원의 채팅 리스트를 가져옴")
	@ApiResponses({
			@ApiResponse(responseCode = "200", description = "통과"),
			@ApiResponse(responseCode = "400", description = "실패")
	})
	@GetMapping("/api/v1/chatRoomList")
	public List<ChatRoomDto> findByChatRoomList() throws Exception{
		return chatService.findChatRoomList();
	}


	@Operation(summary = "채팅방 정보(채팅 목록) 가져오기", description = "채팅방 정보")
	@ApiResponses({
			@ApiResponse(responseCode = "200", description = "통과"),
			@ApiResponse(responseCode = "500" , description = "서버 에러")
	})
	@GetMapping("/api/v1/chatRoom/{chatRoomId}")
	public List<ChatMessageDto> chatRoomMessage(@PathVariable Long chatRoomId){
		return chatService.findChatRoomMessage(chatRoomId);
	}

	//채팅방 개설
	@Operation(summary = "채팅방 생성", description = "상품페이지에서 채팅 시작할 때 사용" +
			"이미 채팅이 있는 경우 기존 채팅방 ID 리턴")
	@ApiResponses({
			@ApiResponse(responseCode = "200", description = "통과"),
			@ApiResponse(responseCode = "500", description = "서버 에러")
	})
	@PostMapping(value = "/api/v1/createChatroom", produces="application/text; charset=utf8")
	public Long room(@RequestParam(name = "productId", required = true) Long productId){

		return chatService.createChatroom(productId);


	}

	@Operation(summary = "메세지 전송", description = "/resources/templates/chat/room.html 참조")
	@ApiResponses({
			@ApiResponse(responseCode = "200", description = "통과"),
			@ApiResponse(responseCode = "400", description = "실패")
	})
	@PostMapping(value = "/pub/chat/message", produces="application/text; charset=utf8")
	public void sendChat(@RequestBody ChatSendMessageDto chatSendMessageDto){

		System.out.println("ASDF");

	}







}
