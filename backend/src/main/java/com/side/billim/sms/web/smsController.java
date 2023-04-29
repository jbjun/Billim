package com.side.billim.sms.web;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.side.billim.sms.web.dto.Request;
import com.side.billim.sms.web.dto.SmsResponse;
import com.side.billim.sms.web.service.SmsService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.io.UnsupportedEncodingException;
import java.net.URISyntaxException;
import java.security.InvalidKeyException;
import java.security.NoSuchAlgorithmException;

@RestController
@RequiredArgsConstructor
public class smsController {

  private final SmsService smsService;

  @PostMapping("/user/sms")
  public ResponseEntity<SmsResponse> sms(@RequestBody Request request) throws NoSuchAlgorithmException, URISyntaxException, UnsupportedEncodingException, InvalidKeyException, JsonProcessingException {
    SmsResponse data = smsService.sendSms(request.getRecipientPhoneNumber(), request.getContent());
    return ResponseEntity.ok().body(data);
  }

}
