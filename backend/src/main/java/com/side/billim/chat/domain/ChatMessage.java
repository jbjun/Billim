package com.side.billim.chat.domain;

import com.side.billim.common.domain.BaseTimeEntity;
import com.side.billim.login.domain.user.User;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Getter
@NoArgsConstructor
@Entity
@Table(name = "tb_chat_message")
public class ChatMessage extends BaseTimeEntity{

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "chat_room_id")
	private ChatRoom chatRoom;

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "sender_id")
	private User user;

	@Column(name = "is_read")
	private boolean isRead;

	@Column(name = "message")
	private String message;


	@Builder
	public ChatMessage(ChatRoom chatRoom , User user, String message){
		this.chatRoom = chatRoom;
		this.user = user;
		this.message = message;
	}

	public ChatMessage(ChatRoom chatRoom, User user) {
		super();
	}
}
