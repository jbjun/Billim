package com.side.billim.chat.service;

import com.side.billim.chat.domain.ChatRepository;
import com.side.billim.chat.web.dto.ChatMessageListDto;
import com.side.billim.chat.web.dto.ChatRoomDto;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@RequiredArgsConstructor
@Service
public class ChatService {

	private final ChatRepository chatRepository;

	@Transactional(readOnly = true)
	public List<ChatRoomDto> findChatRoomList(Long id){
		return chatRepository.findChatRoomList(id).stream().map(ChatRoomDto::new).collect(Collectors.toList());
	}

	@Transactional(readOnly = true)
	public List<ChatMessageListDto> findChatRoom(Long chatRoomId) {
		return chatRepository.findChatRoom(chatRoomId).stream().map(ChatMessageListDto::new).collect(Collectors.toList());

	}
}
