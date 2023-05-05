package com.side.billim.login.web;

import com.side.billim.login.domain.user.ImageRepository;
import com.side.billim.login.domain.user.User;
import com.side.billim.login.domain.user.UserRepository;
import com.side.billim.login.service.UserService;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import org.apache.commons.io.FilenameUtils;
import org.apache.commons.io.IOUtils;
import org.apache.commons.lang3.RandomStringUtils;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.oauth2.client.authentication.OAuth2AuthenticationToken;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.nio.file.Files;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RequiredArgsConstructor
@Controller
@RequestMapping("/user")
@CrossOrigin(origins = "http://localhost:7777")
public class UserController {
  private final UserRepository userRepository;
  private final UserService userService;
  private final ImageRepository imageRepository;


  // 로그인 처리 후에 호출되는 콜백 URL
  @GetMapping("/oauth_login")
  @ApiOperation(value = "소셜 로그인", notes = "소셜 로그인 API")
  public String oauth2Callback(OAuth2AuthenticationToken authentication, Model model, @RequestParam("oauthId") String oauthId, RedirectAttributes re) {

    String name = (String) authentication.getPrincipal().getAttributes().get("name");
    String email = (String) authentication.getPrincipal().getAttributes().get("email");

    String user = userRepository.checkEmail(email);
    Long id = userRepository.checkId(email);

    re.addAttribute("userName", name);
    re.addAttribute("userEmail", email);
    re.addAttribute("oauthId", oauthId);
    re.addAttribute("id", id);

    if(user == null || user == ""){
      return "redirect:http://localhost:7777/user/login";
    }else {
      return "redirect:http://localhost:7777/main";
    }

  }

  @GetMapping("/login")
  @ApiOperation(value = "추가 회원가입", notes = "추가 회원가입 API")
  public ResponseEntity<List> login(@RequestParam("userName") String userName, @RequestParam("userEmail") String userEmail
                                  , @RequestParam("oauthId") String oauthId, @RequestParam("id") Long id) {
      List users = new ArrayList();
      users.add(userName);
      users.add(userEmail);
      users.add(oauthId);
      users.add(id);
    return new ResponseEntity<>(users, HttpStatus.OK);
  }

  @RequestMapping(value = "/logout", method = RequestMethod.POST)
  @ApiOperation(value = "로그아웃", notes = "로그아웃 API")
  public void logout(HttpServletRequest request) throws ServletException {
    // 로그아웃 처리
    request.logout();
  }

  @GetMapping("/chkUser")
  @ApiOperation(value = "닉네임 중복체크", notes = "닉네임 중복체크 API")
  public ResponseEntity<Boolean> checkNicknameDuplicate(@RequestParam("nickName") String nickName){

    Optional<String> name = userRepository.checkNickname(nickName);

    if(name.isPresent()) {
      return ResponseEntity.status(HttpStatus.OK).body(false);
    }
    return ResponseEntity.status(HttpStatus.OK).body(true);
  }

  @GetMapping("/selectUser")
  @ApiOperation(value = "회원정보", notes = "회원정보 API")
  public ResponseEntity<User> selectUser(@RequestParam("id") Long id) {
    User response = userRepository.selectUser(id);
    return ResponseEntity.ok(response);
  }

  @PostMapping("/images")
  public ResponseEntity<User> uploadImage(@RequestParam("id") Long id, @RequestParam("file") MultipartFile files) throws IOException {

    String sourceFileName = files.getOriginalFilename();
    String sourceFileNameExtension = FilenameUtils.getExtension(sourceFileName).toLowerCase();
    File destinationFile;
    String destinationFileName;
    // local
    String fileUrl = "C:/billim/";

    do {
      destinationFileName = RandomStringUtils.randomAlphanumeric(32) + "." + sourceFileNameExtension;
      destinationFile = new File(fileUrl + destinationFileName);
    } while (destinationFile.exists());

    destinationFile.getParentFile().mkdirs();
    files.transferTo(destinationFile);

    User image = imageRepository.findById(id).get();
    image.imageSave(id, destinationFileName, sourceFileName, fileUrl);
    imageRepository.save(image);
    return ResponseEntity.ok(image);
  }

  @GetMapping("/images")
  public ResponseEntity<String> getImage(@RequestParam("id") Long id) {
    Optional<User> image = imageRepository.findById(id);
    if (image.isPresent()) {
      return ResponseEntity.ok(image.get().getImageName());
    }
    return ResponseEntity.notFound().build();
  }


  @ApiOperation(value = "image 조회 ", notes = "Image를 반환합니다. 못찾은경우 기본 image를 반환합니다.")
  @GetMapping(value = "/image/{imagename}", produces = MediaType.IMAGE_JPEG_VALUE)
  public ResponseEntity<byte[]> userSearch(@PathVariable("imagename") String imagename) throws IOException {
    InputStream imageStream = new FileInputStream("C://billim/" + imagename);
    byte[] imageByteArray = IOUtils.toByteArray(imageStream);
    imageStream.close();
    return new ResponseEntity<byte[]>(imageByteArray, HttpStatus.OK);
  }


  @RequestMapping("/image")
  public String Insert() {

    return "insert";
  }
}
