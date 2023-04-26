package com.side.billim.chat.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.messaging.simp.config.MessageBrokerRegistry;
import org.springframework.web.socket.config.annotation.EnableWebSocketMessageBroker;
import org.springframework.web.socket.config.annotation.StompEndpointRegistry;
import org.springframework.web.socket.config.annotation.WebSocketMessageBrokerConfigurer;

@Configuration
@EnableWebSocketMessageBroker // STOMP 사용을 위한 어노테이션
public class WebSocketConfig implements WebSocketMessageBrokerConfigurer {

	@Override
	public void registerStompEndpoints(StompEndpointRegistry registry) {
		registry.addEndpoint("/stomp/chat")
				.setAllowedOrigins("http://52.64.106.59:8080") // CORS 오류를 방지하기 위해 *로 처리, 추후 특정 origin 등록
				.withSockJS();
	}


	@Override
	public void configureMessageBroker(MessageBrokerRegistry registry) {
		//클라이언트로 메세지를 응답 해 줄 때 prefix 정의 - 클라이언트가 메세지를 받을 때
		registry.enableSimpleBroker("/sub"); //ex) stomp.subscribe("/sub/chat/room/",function(){})

		//클라이언트에서 메세지 송신 시 붙일 prefix 정의 - 클라이언트가 메세지를 보낼때
		registry.setApplicationDestinationPrefixes("/pub"); //ex) stomp.send("/pub/chat/room/",function(){})

	}

}
