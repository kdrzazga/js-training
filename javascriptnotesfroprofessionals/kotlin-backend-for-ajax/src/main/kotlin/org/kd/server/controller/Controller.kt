package org.kd.server.controller

import org.springframework.http.HttpHeaders
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.ui.Model
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PostMapping
import java.io.IOException
import java.nio.file.Files
import java.nio.file.Paths
import java.util.*
import javax.servlet.http.HttpServletRequest
import javax.servlet.http.HttpServletResponse

open class Controller {//extended by CountryController

    private val helper = ControllerHelper()

    @GetMapping("/response-entity-builder-with-http-headers")
    fun usingResponseEntityBuilderAndHttpHeaders(): ResponseEntity<String> {
        val responseHeaders = HttpHeaders()
        responseHeaders.set(
                "Baeldung-Example-Header",
                "Value-ResponseEntityBuilderWithHttpHeaders"
        )

        responseHeaders.set("Access-Control-Allow-Origin", "*")

        return ResponseEntity.ok()
                .headers(responseHeaders)
                .body("Response with header using ResponseEntity")
    }

    @PostMapping("/simplePost")
    fun sendSimplePostWithHeader(request: HttpServletRequest,
                                 response: HttpServletResponse, model: Model): ResponseEntity<String> {

        val responseHeaders = HttpHeaders()
        responseHeaders.set("Access-Control-Allow-Origin", "*")

        if (!validateRequest(request)) {
            return createErrorResponse(
                    HttpStatus.BAD_REQUEST,
                    "Wrong parameters. Only single parameter 'word' required."
            )
        }

        val id = this.helper.generateId()
        responseHeaders.set("id", id)
        val path = Paths.get("output.txt")

        val param = listOf(request.getParameter("word"))

        try {
            Files.newBufferedWriter(path).use { writer ->
                val savedLine = "$id $param"
                writer.write(savedLine)

                return ResponseEntity
                        .status(HttpStatus.OK)
                        .body("Saved $savedLine")

            }
        } catch (e: IOException) {
            return createErrorResponse(HttpStatus.INTERNAL_SERVER_ERROR, Arrays.stream(e.stackTrace).toString())
        }

    }

    @PostMapping


    private fun validateRequest(request: HttpServletRequest): Boolean {
        val params = Collections.list(request.parameterNames)
        return if (params.size != 1) {
            false
        } else {
            params[0] == "word"
        }
    }

    private fun createErrorResponse(status: HttpStatus, message: String): ResponseEntity<String> {
        val error = "error message $message"

        return ResponseEntity
                .status(status)
                .body(error)
    }
}