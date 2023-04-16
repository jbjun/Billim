package com.side.billim.chat.web;

import com.side.billim.chat.service.ChatService;
import com.side.billim.chat.web.dto.ChatRoomsDto;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import java.util.List;

@Log4j2
@RequiredArgsConstructor
@Controller
@RequestMapping("/chat")
public class ChatController {

	private final ChatService chatService;

	@GetMapping("/rooms")
	public String rooms(Model model) {

		return "/chat/rooms";

	}

	@Operation(summary = "채팅방 목록", description = "채팅방 목록")
	@ApiResponses({
			@ApiResponse(responseCode = "200", description = "통과"),
			@ApiResponse(responseCode = "400", description = "실패")
	})
	@GetMapping("/api/chatRoomList")
	public List<ChatRoomsDto> findByChatRooms() throws Exception{
		return chatService.findAllDesc();
	}

	//채팅방 개설
	@PostMapping(value = "/roomList")
	public String room(@RequestParam String name, RedirectAttributes rttr){

//		rttr.addFlashAttribute("roomName", chatRoomRepository.createChatRoom(name));
		return "redirect:/chat/room";
	}

	//채팅방 조회
	@GetMapping("/room")
	public String getRoom(String roomId, Model model){

		log.info("# get Chat Room, roomID : " + roomId);

		return "/chat/room";


//		model.addAttribute("room", repository.findRoomById(roomId));
	}





}
