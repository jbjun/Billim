package com.side.billim.chat.domain;

import com.side.billim.common.domain.BaseTimeEntity;
import com.side.billim.login.domain.user.User;
import com.side.billim.product.domain.Product;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
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
	private Long id;

	@ManyToOne(fetch =  FetchType.LAZY)
	@JoinColumn(name = "product_id")
	private Product product;

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "buyer_id")
	private User user;

	@OneToMany(mappedBy = "room")
	private List<ChatMessage> chatMessages = new ArrayList<>();

	@Column(name = "lastMessage")
	private String lastMessage;



	// 추후 Product id 추가


//	@Builder
//	public ChatRoom(User user, String message) {
////		this.user = user;
//		this.message = message;
//	}



}
