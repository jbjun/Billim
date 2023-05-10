package com.side.billim.sms.web.service;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.side.billim.login.domain.user.UserRepository;
import com.side.billim.sms.domain.SmsRepository;
import com.side.billim.sms.dto.MessageDto;
import com.side.billim.sms.dto.SmsRequestDto;
import com.side.billim.sms.dto.SmsResponseDto;
import org.apache.tomcat.util.codec.binary.Base64;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.client.HttpComponentsClientHttpRequestFactory;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import javax.crypto.Mac;
import javax.crypto.spec.SecretKeySpec;
import javax.transaction.Transactional;
import java.io.UnsupportedEncodingException;
import java.net.URI;
import java.net.URISyntaxException;
import java.security.InvalidKeyException;
import java.security.NoSuchAlgorithmException;
import java.util.ArrayList;
import java.util.List;
import java.util.Random;

@Service
@Transactional
public class SmsService {

  @Value("${sms.accessKey}")
  private String accessKey;
  @Value("${sms.secretKey}")
  private String secretKey;
  @Value("${sms.serviceId}")
  private String serviceId;
  @Value("${sms.senderPhone}")
  private String phone;

  @Autowired
  private SmsRepository smsRepository;

  public SmsResponseDto sendSms(MessageDto messageDto) throws JsonProcessingException, UnsupportedEncodingException, NoSuchAlgorithmException, InvalidKeyException, URISyntaxException {
    Long time = System.currentTimeMillis();

    HttpHeaders headers = new HttpHeaders();
    headers.setContentType(MediaType.APPLICATION_JSON);
    headers.set("x-ncp-apigw-timestamp", time.toString());
    headers.set("x-ncp-iam-access-key", accessKey);
    headers.set("x-ncp-apigw-signature-v2", makeSignature(time));

    Random rand  = new Random(); //랜덤숫자 생성하기 !!
    String numStr = "";
    for(int i=0; i<4; i++) {
      String ran = Integer.toString(rand.nextInt(10));
      numStr+=ran;
    }
    messageDto.setContent("[Billim]본인확인을 위해 인증번호 ["+numStr+"]를 입력해 주세요.");

    smsRepository.updateAthntNmbr(numStr,messageDto.getId());


    List<MessageDto> messages = new ArrayList<>();
    messages.add(messageDto);

    SmsRequestDto request = SmsRequestDto.builder()
        .type("SMS")
        .contentType("COMM")
        .countryCode("82")
        .from("01067567112")
        .content(messageDto.getContent())
        .messages(messages)
        .build();

    ObjectMapper objectMapper = new ObjectMapper();
    String body = objectMapper.writeValueAsString(request);
    HttpEntity<String> httpBody = new HttpEntity<>(body, headers);

    RestTemplate restTemplate = new RestTemplate();
    restTemplate.setRequestFactory(new HttpComponentsClientHttpRequestFactory());
    SmsResponseDto response = restTemplate.postForObject(new URI("https://sens.apigw.ntruss.com/sms/v2/services/"+ serviceId +"/messages"), httpBody, SmsResponseDto.class);

    return response;

  }
  public String makeSignature(Long time) throws UnsupportedEncodingException, NoSuchAlgorithmException, InvalidKeyException {

    String space = " ";
    String newLine = "\n";
    String method = "POST";
    String url = "/sms/v2/services/"+ this.serviceId+"/messages";
    String timestamp = time.toString();
    String accessKey = this.accessKey;
    String secretKey = this.secretKey;

    String message = new StringBuilder()
        .append(method)
        .append(space)
        .append(url)
        .append(newLine)
        .append(timestamp)
        .append(newLine)
        .append(accessKey)
        .toString();

    SecretKeySpec signingKey = new SecretKeySpec(secretKey.getBytes("UTF-8"), "HmacSHA256");
    Mac mac = Mac.getInstance("HmacSHA256");
    mac.init(signingKey);

    byte[] rawHmac = mac.doFinal(message.getBytes("UTF-8"));
    String encodeBase64String = Base64.encodeBase64String(rawHmac);

    return encodeBase64String;
  }

  public String selectContent(Long id) {
    return smsRepository.selectContent(id);
  }

  public void updateUser(Long id, String number, String nickName, String juso) {
    smsRepository.updateUser(id,number,nickName,juso);
  }

  public void deleteUser(Long id) {

    smsRepository.deleteChatMessage(id);
    smsRepository.deleteChatRoom(id);
    smsRepository.deleteProductImg(id);

    smsRepository.deleteById(id);
  }
}
