package com.example.backend.dtos;

import lombok.Data;

import java.io.Serializable;

@Data
public class RegistrationDTO implements Serializable {
    private final String name;
    private final String surname;
    private final String email;
    private final String password;
}
