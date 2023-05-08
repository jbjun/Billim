package com.side.billim.product.web.dto;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.side.billim.product.domain.Product;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.springframework.format.annotation.DateTimeFormat;

import java.time.LocalDateTime;

@Getter
@NoArgsConstructor
public class ProductResponseDto {

	private Long id;
	private String productName;
	private Long userId;
	private String nickName;
	private boolean isPublic;
	private String productCategory;
	private String productContent;
	private boolean productFree;
	private int productHit;
	private String productPrice;
	private String productState;

	@JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd HH:mm:ss")
	@DateTimeFormat(pattern = "yyyy-MM-dd HH:mm:ss")
	private LocalDateTime createdDate;

	@JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd HH:mm:ss")
	@DateTimeFormat(pattern = "yyyy-MM-dd HH:mm:ss")
	private LocalDateTime modifiedDate;


	// PostsResponseDto는 Entity 필드 중 일부만 사용하므로 생성자로 Entity를 받아 필드에 값을 넣는다.
	// 굳이 모든 생성자가 필요하지 않으므로 Dto는 Entity를 받아 처리리
	public ProductResponseDto(Product entity){
		this.id = entity.getId();
		this.productName = entity.getProductName();
		this.userId = entity.getUser().getId();
		this.nickName = entity.getUser().getNickName();
		this.isPublic = entity.isPublic();
		this.productCategory = entity.getProductCategory();
		this.productContent = entity.getProductContent();
		this.productFree = entity.isProductFree();
		this.productHit = entity.getProductHit();
		this.productPrice = entity.getProductPrice();
		this.productState = String.valueOf(entity.getProductState());
		this.createdDate = entity.getCreatedDate();
		this.modifiedDate = entity.getModifiedDate();
	}
}
