package com.side.billim.chat.service;

import com.side.billim.chat.domain.ChatMessage;
import com.side.billim.chat.domain.ChatMessageRepository;
import com.side.billim.chat.domain.ChatRepository;
import com.side.billim.chat.domain.ChatRoom;
import com.side.billim.chat.web.dto.ChatMessageDto;
import com.side.billim.chat.web.dto.ChatRoomDto;
import com.side.billim.chat.web.dto.ChatSendMessageDto;
import com.side.billim.common.utils.SecurityUtils;
import com.side.billim.login.config.auth.dto.SessionUser;
import com.side.billim.login.domain.user.User;
import com.side.billim.login.domain.user.UserRepository;
import com.side.billim.product.domain.Product;
import com.side.billim.product.domain.ProductRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@RequiredArgsConstructor
@Service
public class ChatService {

	private final ChatRepository chatRepository;
	private final ChatMessageRepository chatMessageRepository;
	private final ProductRepository productRepository;
	private final UserRepository userRepository;

	@Transactional(readOnly = true)
	public List<ChatRoomDto> findChatRoomList(){

		SessionUser sessionUser = (SessionUser) SecurityUtils.getSession().getAttribute("user");

		if(sessionUser == null){
			throw new IllegalArgumentException("잘못된 접근입니다.");
		}

		List<ChatRoom> chatRoomList = chatRepository.findChatRoomList(sessionUser.getId());

		List<ChatRoomDto> chatRoomDtoList = new ArrayList<>();
		for(ChatRoom chatRoom : chatRoomList){
			ChatMessage chatMessage = chatRepository.findLastChatMessage(chatRoom.getId());

			if(chatMessage == null){
				chatMessage = new ChatMessage();
			}

			ChatRoomDto chatRoomDto = new ChatRoomDto(chatRoom, chatMessage);
			chatRoomDtoList.add(chatRoomDto);
		}

		return chatRoomDtoList;
	}

	@Transactional(readOnly = true)
	public List<ChatMessageDto> findChatRoomMessage(Long chatRoomId) {

		SessionUser sessionUser = (SessionUser) SecurityUtils.getSession().getAttribute("user");

		if(sessionUser == null){
			throw new IllegalArgumentException("잘못된 접근입니다.");
		}

		return chatRepository.findChatRoomMessage(chatRoomId, sessionUser.getId()).stream().map(ChatMessageDto::new).collect(Collectors.toList());
	}

	@Transactional
	public Long createChatroom(Long productId){

		SessionUser sessionUser = (SessionUser) SecurityUtils.getSession().getAttribute("user");

		if(sessionUser == null){
			throw new IllegalArgumentException("잘못된 접근입니다.");
		}

		Product product = productRepository.findById(productId).orElseThrow(() -> new IllegalArgumentException("상품이 존재하지 않습니다"));

		// 상품 판매자와 현재 로그인 유저가 같은 경우
		if(product.getUser().getId().equals(sessionUser.getId())){
			throw new IllegalArgumentException("판매자와 구매자가 동일합니다.");
		}

		// 채팅방 조회
		ChatRoom chatRoom = chatRepository.existCheckChatRoom(productId, sessionUser.getId());

		if(chatRoom == null){
			// 생성 로직
			User user = new User(sessionUser.getId());
			Long roomId = chatRepository.save(new ChatRoom(product, user)).getId();
			return chatRoom.getId();
		}else{
			return chatRoom.getId();
		}

	}

	@Transactional
	public ChatSendMessageDto saveMessage(ChatSendMessageDto chatSendMessageDto) {

		if(chatSendMessageDto.getUserId() == null){
			throw new IllegalArgumentException("잘못된 접근입니다.");
		}

		ChatRoom chatRoom = chatRepository.findById(chatSendMessageDto.getRoomId()).orElseThrow(() -> new IllegalArgumentException("채팅방이 존재하지 않습니다"));

		User user = userRepository.findOneById(chatSendMessageDto.getUserId()).get();

		LocalDateTime sendTime = chatMessageRepository.save(new ChatMessage(chatRoom, user, chatSendMessageDto.getMessage())).getCreatedDate();

		chatSendMessageDto.setNickName(user.getNickName());
		chatSendMessageDto.setCreatedDate(sendTime);

		return chatSendMessageDto;




	}
}
