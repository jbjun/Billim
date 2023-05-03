package com.side.billim.sms.web;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.side.billim.sms.dto.MessageDto;
import com.side.billim.sms.dto.SmsResponseDto;
import com.side.billim.sms.web.service.SmsService;
import io.swagger.annotations.ApiImplicitParam;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.io.UnsupportedEncodingException;
import java.net.URISyntaxException;
import java.security.InvalidKeyException;
import java.security.NoSuchAlgorithmException;

@RestController
@RequiredArgsConstructor
public class smsController {

  private final SmsService smsService;

  @GetMapping("/user/sms")
  @ApiOperation(value = "sms 인증번호 발송", notes = "sms 인증번호 발송 API")
  @ApiImplicitParam(name = "to", value = "발송번호")
  public ResponseEntity<SmsResponseDto> sms(@ModelAttribute MessageDto messageDto) throws NoSuchAlgorithmException, URISyntaxException, UnsupportedEncodingException, InvalidKeyException, JsonProcessingException {
    SmsResponseDto data = smsService.sendSms(messageDto);
    return ResponseEntity.ok().body(data);
  }

  @GetMapping("/user/smsChk")
  @ApiOperation(value = "sms 인증번호 체크", notes = "sms 인증번호 체크 API")
  @ApiImplicitParam(name = "content", value = "인증번호")
  public ResponseEntity<Boolean> smsChk(@ModelAttribute MessageDto messageDto) throws NoSuchAlgorithmException, URISyntaxException, UnsupportedEncodingException, InvalidKeyException, JsonProcessingException {
    String data = smsService.selectContent(messageDto.getId());

    if(messageDto.getContent().equals(data)){
      return ResponseEntity.status(HttpStatus.OK).body(true);
    }
    return ResponseEntity.status(HttpStatus.OK).body(false);
  }

  @GetMapping("/user/updateUser")
  @ApiOperation(value = "회원가입 추가 정보 수정", notes = "회원가입 추가 정보 API")
  @ApiImplicitParam(name = "email", value = "이메일")
  public ResponseEntity<?> updateUser(@RequestParam Long id,
                                  @RequestParam String number,
                                  @RequestParam String nickName,
                                  @RequestParam String juso
  ){
    smsService.updateUser(id, number, nickName, juso);

    return ResponseEntity.status(HttpStatus.OK).body(true);
  }

}
