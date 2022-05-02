package com.projet.formation.controllers;

import com.projet.formation.dto.AuthenticationResponse;
import com.projet.formation.dto.LoginDto;
import com.projet.formation.dto.RefreshTokenRequest;
import com.projet.formation.models.User;
import com.projet.formation.services.RefreshTokenService;
import com.projet.formation.services.UserService;
import com.projet.formation.services.impl.AuthServiceImp;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
@RequestMapping("/auth")
public class AuthController {
    @Autowired
    private AuthServiceImp authServiceImp;
    @Autowired
    private RefreshTokenService refreshTokenService;
    @Autowired
    private UserService userService;

    @PostMapping("/login")
    public AuthenticationResponse login(@RequestBody LoginDto loginDto){
        return authServiceImp.login(loginDto);
    }

    @PostMapping("/refresh")
    public AuthenticationResponse refreshTokens(@Valid @RequestBody RefreshTokenRequest refreshTokenRequest) {
        return authServiceImp.refreshToken(refreshTokenRequest);
    }

    @PostMapping("/logout")
    public ResponseEntity<String> logout(@Valid @RequestBody RefreshTokenRequest refreshTokenRequest) {
        refreshTokenService.deleteRefreshToken(refreshTokenRequest.getRefreshToken());
        return ResponseEntity.status(HttpStatus.OK).body("Refresh Token Deleted Successfully!!");
    }
    @GetMapping("/getUserByLogin")
    public ResponseEntity<User> getUserByLogin(@RequestParam(name = "login", required = true) String login) {
        User user= userService.getUserByLogin(login);
        return new ResponseEntity<>(user, HttpStatus.OK);
    }

}
