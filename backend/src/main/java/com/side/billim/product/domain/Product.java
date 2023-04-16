package com.side.billim.product.domain;


import com.side.billim.common.domain.BaseTimeEntity;
import com.side.billim.login.domain.user.User;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Getter
@NoArgsConstructor
@Table(name = "tb_product")
@Entity
public class Product extends BaseTimeEntity {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;

	private String productName;

	@ManyToOne(fetch =  FetchType.LAZY)
	@JoinColumn(name = "writer_id")
	private User user;

}
