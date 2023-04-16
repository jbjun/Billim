package com.side.billim;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TestController {

	@Operation(summary = "String test", description = "문구 테스트@")
	@ApiResponses({
			@ApiResponse(responseCode = "200", description = "통과"),
			@ApiResponse(responseCode = "400", description = "실패")
	})
	@GetMapping("/api/hello")
	public String Hello(){
		return "Hello World!";
	}

}
