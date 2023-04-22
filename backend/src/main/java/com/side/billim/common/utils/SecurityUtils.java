package com.side.billim.common.utils;

import lombok.RequiredArgsConstructor;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Component;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;

import javax.servlet.http.HttpSession;

@Component
@RequiredArgsConstructor
public class SecurityUtils {

	public static HttpSession getSession() {
		ServletRequestAttributes attr = (ServletRequestAttributes) RequestContextHolder.currentRequestAttributes();
		return attr.getRequest().getSession();
	}


	public static String currentUserName() {

		Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
		UserDetails userDetails = (UserDetails) authentication.getPrincipal();

		User user = (User) SecurityContextHolder.getContext().getAuthentication().getPrincipal();


		String username = SecurityContextHolder.getContext().getAuthentication().getName();
//		Authentication authentication = SecurityContextHolder.getContext().getAuthentication();

//		User user = (User) authentication.getPrincipal();

		return username;
	}


}
