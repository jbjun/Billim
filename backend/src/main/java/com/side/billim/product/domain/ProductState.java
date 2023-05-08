package com.side.billim.product.domain;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor
public enum ProductState {

	STATE_ING("STATE_ING","대여중"),
	STATE_ABLE("STATE_ABLE","대여가능"),
	STATE_FINISH("STATE_FINISH", "대여완료"),
	STATE_CANCEL("STATE_CANCEL", "대여취소");

	private final  String key;
	private  final String title;
}