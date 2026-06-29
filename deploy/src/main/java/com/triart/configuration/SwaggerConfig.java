package com.triart.configuration;

import org.springdoc.core.customizers.OpenApiCustomiser;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import io.swagger.v3.oas.models.ExternalDocumentation;
import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.info.Contact;
import io.swagger.v3.oas.models.info.Info;
import io.swagger.v3.oas.models.info.License;
import io.swagger.v3.oas.models.responses.ApiResponse;
import io.swagger.v3.oas.models.responses.ApiResponses;

@Configuration
public class SwaggerConfig {
	@Bean
	public OpenAPI springTriArtOpenAPI () {
		return new OpenAPI()
				.info(new Info()
					.title("Tribo do Artesão")
					.description("Projeto Integrador - Generation Brasil")
					.version("v0.0.1")
					.license(new License ()
							.name("Generation Brasil")
							.url("https://brazil.generation.org/"))
					.contact(new Contact()
							.name("TriArt")
							.url("https://github.com/https-github-com-triboartesao/Deploy")
							.email("triboartesao@gmail.com.com")))
				.externalDocs(new ExternalDocumentation()
						.description("Github")
						.url("https://github.com/https-github-com-triboartesao/Deploy"));
	}

@Bean
public OpenApiCustomiser customerGlobalHeaderOpenApiCustomiser () {
	
	return openApi -> {
		openApi.getPaths().values().forEach(pathItem -> pathItem.readOperations().forEach(operation -> {
			
			ApiResponses apiResponses = operation.getResponses();
			
			apiResponses.addApiResponse("200", createApiResponse("Sucesso!"));
			apiResponses.addApiResponse("201", createApiResponse("Objeto Persistido!"));
			apiResponses.addApiResponse("204", createApiResponse("Objeto Excluido!"));
			apiResponses.addApiResponse("400", createApiResponse("Erro na Requisição!"));
			apiResponses.addApiResponse("401", createApiResponse("Acesso Não Autorizado!"));
			apiResponses.addApiResponse("404", createApiResponse("Obejto Não Encontrado!"));
			apiResponses.addApiResponse("500", createApiResponse("Erro Na Aplicação!"));
			
			
			}));
		};
	
	}
	private ApiResponse createApiResponse(String message) {
	
		return new ApiResponse().description(message);
	}
	

}
