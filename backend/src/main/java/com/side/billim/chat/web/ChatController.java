package com.side.billim.chat.web;

import com.side.billim.chat.service.ChatService;
import com.side.billim.chat.web.dto.ChatRoomDto;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import java.util.List;

@Log4j2
@RequiredArgsConstructor
@RestController
@RequestMapping
public class ChatController {

	private final ChatService chatService;

	@Operation(summary = "채팅방 목록", description = "채팅방 목록")
	@ApiResponses({
			@ApiResponse(responseCode = "200", description = "통과"),
			@ApiResponse(responseCode = "400", description = "실패")
	})
	@GetMapping("/api/v1/chatRoomList")
	public List<ChatRoomDto> findByChatRooms() throws Exception{

		Long id = 2L;

		return chatService.findChatRoomList(id);
	}

	//채팅방 개설
	@PostMapping(value = "/roomList")
	public String room(@RequestParam String name, RedirectAttributes rttr){

//		rttr.addFlashAttribute("roomName", chatRoomRepository.createChatRoom(name));
		return "redirect:/chat/room";
	}






}
