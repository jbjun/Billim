package com.side.billim.chat.web;

import lombok.extern.log4j.Log4j2;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;

@Log4j2
@Controller
//@CrossOrigin(origins="*", allowedHeaders = "*")
public class ChatViewController {

	@GetMapping("/chat/roomList")
	public String rooms(Model model) {

		return "/chat/roomList";

	}

	//채팅방 조회
	@GetMapping("/chat/room")
	public String getRoom(String roomId, Model model){

		roomId = "1";

		log.info("# get Chat Room, roomID : " + roomId);

		return "/chat/room";


//		model.addAttribute("room", repository.findRoomById(roomId));
	}

}
