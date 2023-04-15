package com.side.billim.login.config.auth;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.core.Authentication;
import org.springframework.security.web.authentication.AuthenticationSuccessHandler;
import org.springframework.stereotype.Component;
import org.springframework.web.util.UriComponentsBuilder;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@Slf4j
@RequiredArgsConstructor
@Component
public class OAuth2AuthenticationSuccessHandler implements AuthenticationSuccessHandler {

  @Override
  public void onAuthenticationSuccess(HttpServletRequest httpServletRequest, HttpServletResponse httpServletResponse, Authentication authentication) throws IOException, ServletException {

    String oauthId = authentication.getName();
    String oauthEmail = authentication.getName();

    String uri = UriComponentsBuilder.fromUriString( "http://localhost:8080/user/oauth_login")
        .queryParam("provider", "NAVER")
        .queryParam("oauthId", oauthId)
        .build().toUriString();
    httpServletResponse.sendRedirect(uri);
  }
}
