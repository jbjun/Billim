package com.side.billim.product.domain;


import com.side.billim.common.domain.BaseTimeEntity;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Getter
@NoArgsConstructor
@Table(name = "tb_product_img")
@Entity
public class ProductImg extends BaseTimeEntity {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;

	@ManyToOne(fetch =  FetchType.LAZY)
	@JoinColumn(name = "product_id")
	private Product product;

	@Column(nullable = false)
	private int order;

	@Column
	private String filePath;

	@Column
	private String fileRealPath;

	@Column
	private String fileName;

	@Column
	private String fileExtend;

	@Column
	private String fileSize;


}
