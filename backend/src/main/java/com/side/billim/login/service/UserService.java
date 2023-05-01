package com.side.billim.login.service;

import com.side.billim.login.domain.FileRepository;
import com.side.billim.login.domain.user.User;
import com.side.billim.login.domain.user.UserChkRepository;
import com.side.billim.login.domain.user.UserRepository;
import com.side.billim.login.web.dto.FileDto;
import com.side.billim.login.web.dto.UserUpdateDto;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
public class UserService {
  private UserRepository userRepository;
  private UserChkRepository userChkRepository;
  private FileRepository fileRepository;

  @Transactional
  public ResponseEntity<?> update(User user){

    user.updateUser(user.getId(), user.getName(), user.getNickName(), user.getJuso());

    return ResponseEntity.status(HttpStatus.OK).body(true);
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
