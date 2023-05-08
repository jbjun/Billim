package com.side.billim.product.service;

import com.side.billim.product.domain.Product;
import com.side.billim.product.domain.ProductRepository;
import com.side.billim.product.web.dto.ProductResponseDto;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@RequiredArgsConstructor
@Service
public class ProductService {

	private final ProductRepository productRepository;

	public ProductResponseDto findProductById(Long productId) {

		Product entity = productRepository.findById(productId).orElseThrow(() -> new IllegalArgumentException("해당 게시글이 없습니다 id =" + productId));

		return new ProductResponseDto(entity);
	}
}
