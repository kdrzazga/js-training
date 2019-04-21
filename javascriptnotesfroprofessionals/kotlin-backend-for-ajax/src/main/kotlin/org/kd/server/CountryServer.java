package org.kd.server;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ConfigurableApplicationContext;

import java.util.Arrays;
import java.util.List;

@SpringBootApplication
public class CountryServer {

    private static ConfigurableApplicationContext context;
    private static List<String> info = Arrays.asList("\nSERVER STARTED.",
            "Example requests:",
            "http://localhost:8083/countries",
            "http://localhost:8083/country/0",
            "http://localhost:8083/country/1",
            "http://localhost:8083/country/2",
            "",
            "http://localhost:8083/response-entity-builder-with-http-headers",
            "http://localhost:8083/simplePost\t- Cannot be called directly, use Postman to send POST request with parameter 'word'");

    public static void main(String[] args) {
        context = SpringApplication.run(CountryServer.class, args);

        if (context != null) {
            info.forEach(System.out::println);
        }
    }

    public static ConfigurableApplicationContext getContext() {
        return context;
    }
}
