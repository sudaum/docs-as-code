package net.sudau.dac;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMethod;

/**
 * Wofür wird die Datei benötigt?
 *
 * @author sudau
 * @since 27.02.2025
 */
@CrossOrigin (allowPrivateNetwork = "true", methods = { RequestMethod.GET }, origins = {
        "http://localhost:8080",
        "http://localhost:4200"
})
@SpringBootApplication
public class DocsAsCodeApp {

    public static void main(String[] args) {
        SpringApplication.run(DocsAsCodeApp.class, args);
    }
}
