package com.side.billim.chat.web;

import lombok.extern.log4j.Log4j2;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

@Log4j2
@Controller
@RequestMapping("/chat")
public class ChatController {

	@GetMapping("/rooms")
	public String rooms(Model model) {
		return "/chat/rooms";
	}

	//채팅방 개설
	@PostMapping(value = "/room")
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
