package com.side.billim.login.domain;

import com.side.billim.login.config.auth.dto.SessionUser;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

@RequiredArgsConstructor
@Controller
public class IndexController {

    private final HttpSession httpSession;

    @GetMapping("/")
    public String index(Model model) {

        SessionUser user = (SessionUser) httpSession.getAttribute("user");
        if (user != null) {
            model.addAttribute("userName", user.getName());
            model.addAttribute("userEmail", user.getEmail());
        }
        return "index";
    }

    // 로그인 처리 후에 호출되는 콜백 URL
    @GetMapping("/login/oauth2/code/naver")
    public String naverCallback(Model model,@RequestParam("name") String name, @RequestParam("email") String email) {
        // OAuth2 인증 처리
        System.out.println("dasdasd");

        model.addAttribute("name", name);
        model.addAttribute("email", email);

        // 인증 후에는 적절한 페이지로 이동
        return "redirect:/";
    }

    @RequestMapping(value = "/logout", method = RequestMethod.POST)
    public void logout(HttpServletRequest request) throws ServletException {
        // 로그아웃 처리
        request.logout();
    }

}
