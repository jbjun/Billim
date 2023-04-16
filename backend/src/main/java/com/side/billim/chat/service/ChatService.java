package com.side.billim.chat.service;

import com.side.billim.chat.domain.ChatRepository;
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
	public List<ChatRoomDto> findAllDesc(){
		return chatRepository.findAllDesc().stream().map(ChatRoomDto::new).collect(Collectors.toList());
	}



}
