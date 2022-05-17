package com.example.backend.controllers;

import com.example.backend.dtos.LoginDTO;
import com.example.backend.dtos.RegistrationDTO;
import com.example.backend.model.auth.Account;
import com.example.backend.model.auth.User;
import com.example.backend.services.AuthService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletResponse;


@RestController
@CrossOrigin(origins = "http://localhost:4200", allowCredentials = "true")
@RequestMapping(value = "/auth")
public class AuthController {


    @Autowired
    AuthService authService;

    @PostMapping("/register")
    public ResponseEntity register(@RequestBody RegistrationDTO dto) {
        Account acc = authService.register(dto);
        return new ResponseEntity<>(
                HttpStatus.CREATED
        );
    }

    @CrossOrigin(origins = "http://localhost:4200", allowCredentials = "true")
    @PostMapping("/login")
    public ResponseEntity login(@RequestBody LoginDTO dto, HttpServletResponse response) {

        User user = authService.findUser(dto.getEmail(), dto.getPassword());

        if (user == null)
            return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);

        response.addCookie(authService.login(dto.getEmail(), dto.getPassword())[0]);
        response.addCookie(authService.login(dto.getEmail(), dto.getPassword())[1]);

        return ResponseEntity.ok().build();
    }

    @GetMapping("/logout")
    public ResponseEntity logout(HttpServletResponse response) {
        Cookie[] badCookies = authService.logout();
        response.addCookie(badCookies[0]);
        response.addCookie(badCookies[1]);
        return ResponseEntity.ok().build();
    }

}
