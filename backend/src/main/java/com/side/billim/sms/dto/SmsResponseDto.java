package com.side.billim.sms.dto;

import lombok.*;

import java.time.LocalDateTime;

@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor
@Setter
@Getter
@Builder
public class SmsResponseDto {
  private String requestId;
  private LocalDateTime requestTime;
  private String statusCode;
  private String statusName;
  private String athntNmbr;
}
