package com.side.billim.chat.service;

import com.side.billim.chat.domain.ChatRepository;
import com.side.billim.chat.domain.ChatRoom;
import com.side.billim.chat.web.dto.ChatMessageListDto;
import com.side.billim.chat.web.dto.ChatRoomDto;
import com.side.billim.chat.web.dto.ChatRoomRequestDto;
import com.side.billim.product.domain.Product;
import com.side.billim.product.domain.ProductRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@RequiredArgsConstructor
@Service
public class ChatService {

	private final ChatRepository chatRepository;
	private final ProductRepository productRepository;

	@Transactional(readOnly = true)
	public List<ChatRoomDto> findChatRoomList(Long id){
		return chatRepository.findChatRoomList(id).stream().map(ChatRoomDto::new).collect(Collectors.toList());
	}

	@Transactional(readOnly = true)
	public List<ChatMessageListDto> findChatRoom(Long chatRoomId) {
		return chatRepository.findChatRoom(chatRoomId).stream().map(ChatMessageListDto::new).collect(Collectors.toList());
	}


	public int existCheckChatRoom(Long productId, Long userId) throws Exception{


		Product product = productRepository.findById(productId).get();

		// 상품 판매자와 현재 로그인 유저가 같은 경우
		if(product.getUser().getId().equals(userId)){

			// 잘못된 접근 처리
			return 0;
		}



		// 채팅방 조회
		ChatRoom chatRoom = chatRepository.existCheckChatRoom(productId, userId);

		if(chatRoom == null){

			// 생성 로직


		}else{


			// 반환
			ChatRoomRequestDto chatRoomRequestDto = new ChatRoomRequestDto(chatRoom);
			// 채팅방 생성 후


		}


		return 1;



	}
}
