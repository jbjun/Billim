package com.side.billim.chat.domain;

import com.side.billim.common.domain.BaseTimeEntity;
import com.side.billim.login.domain.user.User;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.io.Serializable;
import java.time.LocalDateTime;

@Getter
@Entity
@Table(name = "tb_chat_message")
public class ChatMessage extends BaseTimeEntity implements Serializable{

//	@Id
//	@GeneratedValue(strategy = GenerationType.AUTO)
//	private Long id;

	@Id
	@ManyToOne
	@JoinColumn(name = "room_id")
	private ChatRoom room;

	@Id
	@ManyToOne
	@JoinColumn(name = "user_id")
	private User user;

	@Column(name = "message")
	private String message;

	@Column(name = "createdDate")
	private LocalDateTime createdDate;


}
