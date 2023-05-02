package com.side.billim.login.config.auth;

import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.context.request.RequestContextListener;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

import java.util.Arrays;

@RequiredArgsConstructor
@EnableWebSecurity
@Configuration
public class SecurityConfig extends WebSecurityConfigurerAdapter{

  private final CustomOAuth2UserService customOAuth2UserService;

  private final OAuth2AuthenticationSuccessHandler oAuth2AuthenticationSuccessHandler;

  @Bean
  public BCryptPasswordEncoder encoder() {
    return new BCryptPasswordEncoder();
  }

  @Bean
  public RequestContextListener requestContextListener(){
    return new RequestContextListener();
  }

  @Bean
  public CorsConfigurationSource corsConfigurationSource() {
    CorsConfiguration config = new CorsConfiguration();

    config.setAllowCredentials(true);
    config.setAllowedOrigins(Arrays.asList("http://localhost:3000"));
    config.setAllowedMethods(Arrays.asList("HEAD","POST","GET","DELETE","PUT"));
    config.setAllowedHeaders(Arrays.asList("*"));

    UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
    source.registerCorsConfiguration("/**", config);
    return source;
  }

  @Override
  protected void configure(HttpSecurity http) throws Exception {
    http.cors().and().csrf().disable().headers().frameOptions().disable()
      .and()
      .cors().configurationSource(corsConfigurationSource())
      .and()
      .authorizeRequests()
//      .mvcMatchers(HttpMethod.OPTIONS, "/**").permitAll()
      .antMatchers("/","/**", "/css/**", "/images/**", "/js/**", "/h2-console/**", "/v3/api-docs/**","/swagger-ui/**","/swagger-resources/**","/api/v1/**").permitAll()
//      .antMatchers("/api/v1/**").hasRole(Role.USER.name())
      .anyRequest().authenticated()
      .and()
      .logout() //로그아웃 시 할 일들의 진입점
      .logoutSuccessUrl("/") //로그아웃 성공시 이동할 URL지정
      .and()
      /*.exceptionHandling().authenticationEntryPoint(loginUrlAuthenticationEntryPoint)
      .and()*/
      .oauth2Login() //OAuth2 로그인 기능에 대한 설정의 진입점
      .userInfoEndpoint() //OAuth2 로그인 성공 이후 사용자 성보를 가져올때의 설정들을 담당
      .userService(customOAuth2UserService)
      .and()
      .successHandler(oAuth2AuthenticationSuccessHandler);
  }
}
