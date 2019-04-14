package org.kd.server.controller;

import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.BufferedWriter;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;

public class Controller {//extended by CountryController

    private final ControllerHelper helper = new ControllerHelper();

    @GetMapping("/response-entity-builder-with-http-headers")
    public ResponseEntity<String> usingResponseEntityBuilderAndHttpHeaders() {
        HttpHeaders responseHeaders = new HttpHeaders();
        responseHeaders.set("Baeldung-Example-Header",
                "Value-ResponseEntityBuilderWithHttpHeaders");

        responseHeaders.set("Access-Control-Allow-Origin", "*");

        return ResponseEntity.ok()
                .headers(responseHeaders)
                .body("Response with header using ResponseEntity");
    }

    @PostMapping("/simplePost")
    public ResponseEntity<String> sendSimplePostWithHeader(HttpServletRequest request,
                                                           HttpServletResponse response, Model model) {

        HttpHeaders responseHeaders = new HttpHeaders();
        responseHeaders.set("Access-Control-Allow-Origin", "*");

        if (!validateRequest(request)) {
            return createErrorResponse(HttpStatus.BAD_REQUEST,
                    "Wrong parameters. Only single parameter 'word' required.");
        }

        String id = this.helper.generateId();
        responseHeaders.set("id", id);
        Path path = Paths.get("output.txt");

        List<String> param = Collections.singletonList(request.getParameter("word"));

        try (BufferedWriter writer = Files.newBufferedWriter(path)) {
            String savedLine = id + " " + param;
            writer.write(savedLine);

            return ResponseEntity
                    .status(HttpStatus.OK)
                    .body("Saved " + savedLine);

        } catch (IOException e) {
            return createErrorResponse(HttpStatus.INTERNAL_SERVER_ERROR, Arrays.stream(e.getStackTrace()).toString());
        }
    }

    private boolean validateRequest(HttpServletRequest request) {
        List<String> params = Collections.list(request.getParameterNames());
        if (params.size() != 1) {
            return false;
        } else {
            return params.get(0).equals("word");
        }
    }

    private ResponseEntity<String> createErrorResponse(HttpStatus status, String message) {
        String error = "error message " + message;

        return ResponseEntity
                .status(status)
                .body(error);
    }
}