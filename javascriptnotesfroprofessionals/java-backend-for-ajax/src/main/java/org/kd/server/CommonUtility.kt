package org.kd.server

import org.springframework.beans.factory.annotation.Autowired
import org.springframework.http.*
import org.springframework.stereotype.Component
import org.springframework.web.client.HttpStatusCodeException
import org.springframework.web.client.RestTemplate

@Component
class CommonUtility {

    var errorResponseStatusCode: String? = null
        private set
    var errorResponseBody: String? = null
        private set

    @Autowired
    private val restTemplate: RestTemplate? = null

    private fun interceptErrorResponse(e: HttpStatusCodeException) {
        errorResponseStatusCode = e.statusCode.toString().replace("\\D+".toRegex(), "")
        errorResponseBody = e.responseBodyAsString
    }

    fun processHttpRequest(
        httpMethod: HttpMethod,
        request: String,
        requestUrl: String,
        contentType: String
    ): ResponseEntity<String>? {
        val entity = createRequestEntity(request, contentType)
        try {
            return restTemplate!!.exchange(requestUrl, httpMethod, entity, String::class.java)
        } catch (e: HttpStatusCodeException) {
            interceptErrorResponse(e)
        }

        return null
    }

    private fun createRequestEntity(request: String, contentType: String): HttpEntity<String> {
        val httpHeaders = HttpHeaders()
        httpHeaders.contentType = MediaType.valueOf(contentType)
        return HttpEntity(request, httpHeaders)
    }
}

