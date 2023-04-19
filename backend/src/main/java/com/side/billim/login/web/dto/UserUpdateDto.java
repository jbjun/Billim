package com.side.billim.login.web.dto;

import io.swagger.annotations.ApiModelProperty;
import lombok.Builder;
import lombok.Getter;

@Getter
public class UserUpdateDto {

  @ApiModelProperty(example = "전화번호")
  private String number;

  @ApiModelProperty(example = "닉네임")
  private String nickName;

  @ApiModelProperty(example = "주소")
  private String juso;

  @Builder
  public UserUpdateDto(String number, String nickName, String juso) {
    this.number = number;
    this.nickName = nickName;
    this.juso = juso;
  }
}
