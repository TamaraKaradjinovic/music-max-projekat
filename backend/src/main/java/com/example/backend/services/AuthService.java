package com.example.backend.services;

import com.example.backend.model.auth.Account;
import com.example.backend.model.auth.User;
import com.example.backend.repositories.AccountRepository;
import com.example.backend.repositories.RoleRepository;
import com.example.backend.repositories.UserRepository;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.security.Keys;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.crypto.SecretKey;
import javax.servlet.http.Cookie;
import java.util.Date;

@Service
public class AuthService {

    private final UserRepository userRepository;
    private final RoleRepository roleRepository;
    private final AccountRepository accountRepository;

    private final SecretKey key = Keys.secretKeyFor(SignatureAlgorithm.HS256);

    @Autowired
    public AuthService(UserRepository userRepository, RoleRepository roleRepository, AccountRepository accountRepository) {
        this.userRepository = userRepository;
        this.roleRepository = roleRepository;
        this.accountRepository = accountRepository;
    }

    public Account register(String name, String surname, String email, String password) {

        User user = new User();
        user.setEmail(email);
        user.setPassword(password);
        user.setRole(roleRepository.getById(1L));

        Account account = new Account();
        account.setName(name);
        account.setSurname(surname);
        account.setUser(user);

        return accountRepository.save(account);
    }

    public User findUser(String email, String password) {
        return userRepository.findByEmailAndPassword(email, password);
    }


    public Cookie[] login(String email, String password) {
        User user = userRepository.findByEmailAndPassword(email, password);
        if (user == null)
            return null;
        return getCookies(user);
    }

    private Cookie[] getCookies(User user) {
        String token = generateToken(user.getEmail(), user.getRole().getName());
        return new Cookie[] {
                getRoleCookie(user.getRole().getName()),
                getTokenCookie(token)
        };
    }

    private Cookie getTokenCookie(String token) {
        Cookie cookie = new Cookie("token", token);
        cookie.setHttpOnly(true);
        return getGoodCookie(cookie);
    }

    private Cookie getRoleCookie(String role) {
        Cookie cookie = new Cookie("role", role);
        cookie.setHttpOnly(false);
        return getGoodCookie(cookie);
    }

    private Cookie getGoodCookie(Cookie cookie) {
        cookie.setMaxAge(24 * 60 * 60);
        cookie.setPath("/");
        return cookie;
    }

    public Cookie logout() {
        return getBadCookie();
    }

    private Cookie getBadCookie() {
        Cookie tokenCookie = new Cookie("token", null);
        tokenCookie.setMaxAge(0);
        tokenCookie.setPath("/");
        return tokenCookie;
    }

    private String generateToken(String email, String role) {
        return Jwts.builder()
                .setSubject(email)
                .claim("email", email)
                .claim("role", role)
                .setIssuedAt(new Date())
                .setExpiration(generateExpirationDate())
                .signWith(key)
                .compact();
    }

    private Date generateExpirationDate() {
        return new Date(System.currentTimeMillis() + 1000 * 60 * 30);
    }


}
