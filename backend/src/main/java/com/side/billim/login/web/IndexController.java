package com.side.billim.login.web;

import com.side.billim.login.config.auth.dto.SessionUser;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import javax.servlet.http.HttpSession;

@RequiredArgsConstructor
@Controller
public class IndexController {

  private final HttpSession httpSession;

  @GetMapping("/")
  @ApiOperation(value = "메인 페이지", notes = "메인 페이지 API")
  public String index(Model model) {

    SessionUser user = (SessionUser) httpSession.getAttribute("user");
      if (user != null) {
        model.addAttribute("userName", user.getName());
        model.addAttribute("userEmail", user.getEmail());
      }
      return "index";
    }
}
