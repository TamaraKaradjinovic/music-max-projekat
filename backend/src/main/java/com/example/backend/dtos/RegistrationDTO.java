package com.example.backend.dtos;

import com.example.backend.model.auth.Gender;
import lombok.Data;

import javax.persistence.Column;
import java.io.Serializable;
import java.time.LocalDate;

@Data
public class RegistrationDTO implements Serializable {
    private final String name;
    private final String surname;
    private final String email;
    private final String password;
    private final String phoneNumber;
    private final String gender;
    private final String birthdate;
}
