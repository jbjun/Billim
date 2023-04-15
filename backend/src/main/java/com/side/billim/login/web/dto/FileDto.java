package com.side.billim.login.web.dto;

import com.side.billim.login.domain.user.User;
import lombok.Builder;
import lombok.Getter;

@Getter
public class FileDto {
  private String originFileName;
  private String fullPath;

  public User toEntity() {
    return User.builder()
        .originFileName(this.originFileName)
        .fullPath(this.fullPath)
        .build();
  }

  @Builder
  public FileDto(String originFileName, String fullPath) {
    this.originFileName = originFileName;
    this.fullPath = fullPath;
  }
}
