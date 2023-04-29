package com.side.billim.login.web;

import com.side.billim.login.domain.user.UserRepository;
import com.side.billim.login.service.UserService;
import com.side.billim.login.web.dto.UserUpdateDto;
import io.swagger.annotations.ApiImplicitParam;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.oauth2.client.authentication.OAuth2AuthenticationToken;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;

@RequiredArgsConstructor
@Controller
@RequestMapping("/user")
public class UserController {

   /* @Autowired
    private OAuth2AuthorizedClientService authorizedClientService;

    Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
    OAuth2AuthenticationToken oauthToken = (OAuth2AuthenticationToken) authentication;
    OAuth2AuthorizedClient authorizedClient = authorizedClientService.loadAuthorizedClient(oauthToken.getAuthorizedClientRegistrationId(), oauthToken.getName());*/

  private final UserRepository userRepository;
  private final UserService userService;

  // 로그인 처리 후에 호출되는 콜백 URL
  @GetMapping("/oauth_login")
  @ApiOperation(value = "소셜 로그인", notes = "소셜 로그인 API")
  public String oauth2Callback(OAuth2AuthenticationToken authentication, Model model, @RequestParam("oauthId") String oauthId) {

    String name = (String) authentication.getPrincipal().getAttributes().get("name");
    String email = (String) authentication.getPrincipal().getAttributes().get("email");

    String user = userRepository.checkEmail(email);

    model.addAttribute("userName", name);
    model.addAttribute("userEmail", email);

    if(user == null || user == ""){
      return "test";
    }else {
      return "index";
    }

  }

  @RequestMapping(value = "/logout", method = RequestMethod.POST)
  @ApiOperation(value = "로그아웃", notes = "로그아웃 API")
  public void logout(HttpServletRequest request) throws ServletException {
    // 로그아웃 처리
    request.logout();
  }

  @PutMapping("/updateUser")
  @ApiOperation(value = "회원가입 추가 정보", notes = "회원가입 추가 정보 API")
  @ApiImplicitParam(name = "email", value = "이메일")
  public void update(@PathVariable String email, @RequestBody UserUpdateDto dto){

    userService.update(email,dto);
  }

  @GetMapping("/chkUser")
  @ApiOperation(value = "닉네임 중복체크", notes = "닉네임 중복체크 API")
  public ResponseEntity<Boolean> checkNicknameDuplicate(@PathVariable String nickname){
    return ResponseEntity.ok(userService.checkNicknameDuplicate(nickname));
  }

}
