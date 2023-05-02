package com.side.billim.login.service;

import com.side.billim.login.domain.FileRepository;
import com.side.billim.login.domain.user.User;
import com.side.billim.login.domain.user.UserChkRepository;
import com.side.billim.login.domain.user.UserRepository;
import com.side.billim.login.web.dto.FileDto;
import com.side.billim.sms.web.domain.SmsRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
public class UserService {
  private UserRepository userRepository;
  private UserChkRepository userChkRepository;
  private FileRepository fileRepository;
  private SmsRepository smsRepository;

  @Transactional
  public void update(String email, String number, String nickName, String juso){
    User user = userRepository.findOneByEmail(email).orElseThrow(()->
            new IllegalArgumentException("해당 이메일이 없습니다 "+email));

    user.updateUser(number,nickName,juso);
  }

  @Transactional
  public Long save(FileDto fileDto) {
    return fileRepository.save(fileDto.toEntity()).getId();
  }

  @Transactional
  public boolean checkNicknameDuplicate(String nickName) {
    return userChkRepository.existsByNickName(nickName);
  }
}
