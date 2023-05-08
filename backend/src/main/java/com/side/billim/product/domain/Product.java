package com.side.billim.product.domain;


import com.side.billim.common.domain.BaseTimeEntity;
import com.side.billim.login.domain.user.User;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Getter
@NoArgsConstructor
@Table(name = "tb_product")
@Entity
public class Product extends BaseTimeEntity {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;

	@Column(nullable = false)
	private String productName;

	@ManyToOne(fetch =  FetchType.LAZY)
	@JoinColumn(name = "writer_id")
	private User user;

	@OneToMany(mappedBy = "productImg")
	private List<ProductImg> productImgList = new ArrayList<>();

	@Column
	private String productCategory;

	@Column(nullable = false)
	private String productPrice;

	@Column(nullable = false)
	private boolean productFree = false;

	@Column(columnDefinition = "TEXT", nullable = false)
	private String productContent;

	@Enumerated(EnumType.STRING)
	@Column(nullable = false)
	private String productState;

	@Column
	private int productHit;

	@Column
	private boolean isPublic = true;


	@Builder
	public Product(Long id) {
		this.id = id;
	}

}
