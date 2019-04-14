package org.kd.server.config

import org.kd.server.CommonUtility
import org.springframework.boot.web.client.RestTemplateBuilder
import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration
import org.springframework.web.client.RestTemplate

@Configuration
class RestTemplateConfig {

    @Bean
    fun countryRestTemplate(restTemplateBuilder: RestTemplateBuilder): RestTemplate {
        return restTemplateBuilder.rootUri("http://localhost:8080").build()
    }

    @Bean
    fun commonUtility(): CommonUtility {
        return CommonUtility()
    }

}
