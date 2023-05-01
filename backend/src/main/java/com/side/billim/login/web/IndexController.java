package com.side.billim.login.web;

import com.side.billim.login.config.auth.dto.SessionUser;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

import javax.servlet.http.HttpSession;
import java.util.ArrayList;
import java.util.List;

@RequiredArgsConstructor
@Controller
@CrossOrigin(origins = "http://localhost:7777")
public class IndexController {

  private final HttpSession httpSession;

  @GetMapping("/")
  @ApiOperation(value = "메인 페이지", notes = "메인 페이지 API")
  public ResponseEntity<List> index(@RequestParam("userName") String userName, @RequestParam("userEmail") String userEmail, @RequestParam("oauthId") String oauthId) {
    List users = new ArrayList();
    users.add(userName);
    users.add(userEmail);
    users.add(oauthId);
    return new ResponseEntity<>(users, HttpStatus.OK);
  }
}
