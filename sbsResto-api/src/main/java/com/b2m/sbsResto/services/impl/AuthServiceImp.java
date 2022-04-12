package com.b2m.sbsresto.services.impl;

import com.b2m.sbsresto.dto.AuthenticationResponse;
import com.b2m.sbsresto.dto.LoginDto;
import com.b2m.sbsresto.dto.RefreshTokenRequest;
import com.b2m.sbsresto.models.User;
import com.b2m.sbsresto.repository.UserRepository;
import com.b2m.sbsresto.security.JwtProvider;
import com.b2m.sbsresto.services.RefreshTokenService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import java.time.Instant;

@Service
@Transactional
public class AuthServiceImp {

    @Autowired
    private AuthenticationManager authenticationManager;
    @Autowired
    private JwtProvider jwtProvider;
    @Autowired
    private RefreshTokenService refreshTokenService;
    @Autowired
    private UserRepository userRepository;

    Logger logger = LoggerFactory.getLogger(AuthServiceImp.class);

    /**
     * wrap user credential inside usernamePass...Token and store the return into SecurityContext
     * @return
     */
    public AuthenticationResponse login(LoginDto loginDto) {
        AuthenticationResponse authenticationResponse= new AuthenticationResponse();
        try{
            Authentication authenticate = authenticationManager
                    .authenticate(new UsernamePasswordAuthenticationToken(loginDto.getUsername(), loginDto.getPassword()));
            SecurityContextHolder.getContext().setAuthentication(authenticate);
            String authenticationToken = jwtProvider.generateToken(authenticate);
            authenticationResponse.setAuthenticationToken(authenticationToken);
            authenticationResponse.setLogin(loginDto.getUsername());
            authenticationResponse.setExpiresAt(Instant.now().plusMillis(jwtProvider.getJwtExpirationInMillis()));
            authenticationResponse.setRefreshToken(refreshTokenService.generateRefreshToken().getToken());
            User user = userRepository.findByUsername(loginDto.getUsername()).get();
            authenticationResponse.setUser(user);
            authenticationResponse.setAuthorities(user.getAuthorities());
        }catch (Exception e){
            String message = "login / Exception Message: " + e.getMessage();
            logger.error(message);
            authenticationResponse = null;
        }
        return authenticationResponse;
    }


    public AuthenticationResponse refreshToken(RefreshTokenRequest refreshTokenRequest) {
        int value = Instant.now().compareTo(refreshTokenRequest.getExpiresAt().plusSeconds(21600));
        if (value<=0) {
            try {
                refreshTokenService.validateRefreshToken(refreshTokenRequest.getRefreshToken());
                String token = jwtProvider.generateTokenWithLogin(refreshTokenRequest.getLogin());
                AuthenticationResponse authenticationResponse = new AuthenticationResponse();
                authenticationResponse.setAuthenticationToken(token);
                authenticationResponse.setLogin(refreshTokenRequest.getLogin());
                authenticationResponse.setExpiresAt(Instant.now().plusMillis(jwtProvider.getJwtExpirationInMillis()));
                authenticationResponse.setRefreshToken(refreshTokenRequest.getRefreshToken());

                return authenticationResponse;
            } catch (Exception e) {
                String message = "refreshToken / Exception Message: " + e.getMessage();
                logger.error(message);
                return null;
            }
        } else{
            refreshTokenService.deleteRefreshToken(refreshTokenRequest.getRefreshToken());
            return null;
        }
    }
}
