package com.side.billim.chat.web;

import com.google.gson.JsonObject;
import com.side.billim.chat.service.ChatService;
import com.side.billim.chat.web.dto.ChatMessageListDto;
import com.side.billim.chat.web.dto.ChatRoomDto;
import com.side.billim.common.utils.SecurityUtils;
import com.side.billim.login.config.auth.dto.SessionUser;
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
public class ChatController {

	private final ChatService chatService;

	@Operation(summary = "채팅방 리스트", description = "채팅방 리스트")
	@ApiResponses({
			@ApiResponse(responseCode = "200", description = "통과"),
			@ApiResponse(responseCode = "400", description = "실패")
	})
	@GetMapping("/api/v1/chatRoomList")
	public List<ChatRoomDto> findByChatRoomList() throws Exception{

		SessionUser sessionUser = (SessionUser) SecurityUtils.getSession().getAttribute("user");

		Long id = 2L;
		return chatService.findChatRoomList(id);
	}


	@Operation(summary = "채팅방 정보 가져오기", description = "채팅방 정보")
	@ApiResponses({
			@ApiResponse(responseCode = "200", description = "통과"),
			@ApiResponse(responseCode = "400", description = "실패")
	})
	@GetMapping("/api/v1/chatRoom/{chatRoomId}")
	public List<ChatMessageListDto> findChatRoom(@PathVariable Long chatRoomId) throws Exception{

		return chatService.findChatRoom(chatRoomId);
	}



	//채팅방 개설
	@Operation(summary = "채팅방 생성", description = "채팅방 생성")
	@ApiResponses({
			@ApiResponse(responseCode = "200", description = "통과"),
			@ApiResponse(responseCode = "400", description = "실패")
	})
	@PostMapping(value = "/api/v1/createChatroom", produces="application/text; charset=utf8")
	public String room(@RequestBody Long productId){

		JsonObject obj =new JsonObject();
		int result = 0;

		SessionUser sessionUser = (SessionUser) SecurityUtils.getSession().getAttribute("user");

		if(sessionUser == null){
			obj.addProperty("resultCode","E");
			obj.addProperty("resultMsg","로그인된 사용자가 없습니다.");
			return obj.toString();
		}


		try {
			result = chatService.existCheckChatRoom(productId, sessionUser.getId());

			if(result == 0){
				obj.addProperty("result","Y");
			}else{
				obj.addProperty("result","N");
			}



		} catch (Exception e){
			e.printStackTrace();
		}

		return obj.toString();

	}






}
