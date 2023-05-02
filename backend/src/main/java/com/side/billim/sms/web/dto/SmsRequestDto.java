package com.side.billim.sms.web.dto;

import lombok.*;

import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
@Builder
public class SmsRequestDto {
  private String type;
  private String contentType;
  private String countryCode;
  private String from;
  private String content;
  private List<MessageDto> messages;
}
