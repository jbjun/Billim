package com.side.billim.login.web;

import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

import javax.servlet.http.HttpSession;
import java.util.ArrayList;
import java.util.List;

@RequiredArgsConstructor
@Controller
//@CrossOrigin(origins="*", allowedHeaders = "*")
public class IndexController {

  private final HttpSession httpSession;

  @GetMapping("/main")
  @ApiOperation(value = "메인 페이지", notes = "메인 페이지 API")
  public ResponseEntity<List> index(@RequestParam("userName") String userName, @RequestParam("userEmail") String userEmail
                                  , @RequestParam("oauthId") String oauthId, @RequestParam("id") Long id) {
    List users = new ArrayList();
    users.add(userName);
    users.add(userEmail);
    users.add(oauthId);
    users.add(id);
    return new ResponseEntity<>(users, HttpStatus.OK);
  }
}
