package com.side.billim.common;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import springfox.documentation.builders.ApiInfoBuilder;
import springfox.documentation.builders.PathSelectors;
import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.service.ApiInfo;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;

@Configuration
@EnableWebMvc
public class SwaggerConfig {

	@Bean
	public Docket swaggerApi() {
		return new Docket(DocumentationType.OAS_30)
				.useDefaultResponseMessages(false)
				.select()
//				.apis(RequestHandlerSelectors.basePackage("com.side.billim"))
				.apis(RequestHandlerSelectors.any())
//				.paths(PathSelectors.any())
				.paths(PathSelectors.regex("/api/.*"))
				.build()
				.apiInfo(mySwaggerInfo());
	}

	private ApiInfo mySwaggerInfo() {
		return new ApiInfoBuilder()
				.title("SwaggerTest API")
				.description("SwaggerTest API Docs")
				.version("3.0")
				.build();
	}
}
