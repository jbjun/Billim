package com.side.billim.product.domain;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor
public enum ProductState {

	ING("ING","대여중"),
	ABLE("ABLE","대여가능"),
	FINISH("FINISH", "대여완료"),
	CANCEL("CANCEL", "대여취소");

	private final  String key;
	private  final String title;
}