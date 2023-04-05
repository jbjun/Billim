package com.side.billim.chat.domain;

import com.side.billim.common.domain.BaseTimeEntity;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@Entity
@Table(name = "tb_chat_room")
public class ChatRoom extends BaseTimeEntity {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "room_id")
	private Long roomId;

	@OneToMany(mappedBy = "room")
	private List<ChatMessage> chatMessages = new ArrayList<>();

	@Column(name = "lastMessage")
	private String lastMessage;


//	@Builder
//	public ChatRoom(User user, String message) {
////		this.user = user;
//		this.message = message;
//	}



}
