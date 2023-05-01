package com.side.billim.sms.web;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.side.billim.sms.web.dto.MessageDto;
import com.side.billim.sms.web.dto.Request;
import com.side.billim.sms.web.dto.SmsResponseDto;
import com.side.billim.sms.web.service.SmsService;
import io.swagger.annotations.ApiImplicitParam;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.UnsupportedEncodingException;
import java.net.URISyntaxException;
import java.security.InvalidKeyException;
import java.security.NoSuchAlgorithmException;

@RestController
@RequiredArgsConstructor
public class smsController {

  private final SmsService smsService;

  @PostMapping("/user/sms")
  @ApiOperation(value = "sms 인증번호 발송", notes = "sms 인증번호 발송 API")
  @ApiImplicitParam(name = "to", value = "발송번호")
  public ResponseEntity<SmsResponseDto> sms(@ModelAttribute MessageDto messageDto) throws NoSuchAlgorithmException, URISyntaxException, UnsupportedEncodingException, InvalidKeyException, JsonProcessingException {
    SmsResponseDto data = smsService.sendSms(messageDto);
    return ResponseEntity.ok().body(data);
  }

}
