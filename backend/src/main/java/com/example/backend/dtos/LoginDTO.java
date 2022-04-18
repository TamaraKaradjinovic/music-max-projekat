package com.example.backend.dtos;

import lombok.Data;

import java.io.Serializable;

@Data
public class LoginDTO implements Serializable {
    private final String email;
    private final String password;
}
