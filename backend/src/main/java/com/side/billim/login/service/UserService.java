package com.side.billim.login.service;

import com.side.billim.login.domain.FileRepository;
import com.side.billim.login.domain.user.UserChkRepository;
import com.side.billim.login.domain.user.UserRepository;
import com.side.billim.login.web.dto.FileDto;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class UserService {
  private UserRepository userRepository;
  private UserChkRepository userChkRepository;
  private FileRepository fileRepository;

  @Transactional
  public Optional<Object> update(Long id, String number, String nickName, String juso){

    Optional<Object> user = userRepository.findOneById(id)
        .map(entity -> entity.updateUser(number, nickName, juso));

    return userRepository.updateUser(user);
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
