package com.side.billim.product.web;

import com.side.billim.product.service.ProductService;
import com.side.billim.product.web.dto.ProductResponseDto;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Log4j2
@RequiredArgsConstructor
@RestController
@RequestMapping
public class ProductController {

	private final ProductService productService;


	@Operation(summary = "상품 정보(채팅 목록) 가져오기", description = "상품 정보")
	@ApiResponses({
			@ApiResponse(responseCode = "200", description = "통과"),
			@ApiResponse(responseCode = "500" , description = "서버 에러")
	})
	@GetMapping("/api/v1/product/{productId}")
	public ProductResponseDto productId(@PathVariable Long productId){
		return productService.findProductById(productId);
	}
}
