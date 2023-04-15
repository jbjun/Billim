package com.side.billim.login.web.dto;

import lombok.Builder;
import lombok.Getter;

@Getter
public class UserUpdateDto {

  private String number;
  private String nickName;
  private String juso;

  @Builder
  public UserUpdateDto(String number, String nickName, String juso) {
    this.number = number;
    this.nickName = nickName;
    this.juso = juso;
  }
}
