package com.b2m.sbsresto.dto;

import com.b2m.sbsresto.models.Role;
import com.b2m.sbsresto.models.User;

import java.time.Instant;
import java.util.HashSet;
import java.util.Set;


public class AuthenticationResponse {
    private String authenticationToken;
    private String login;
    private Instant expiresAt;
    private String refreshToken;
    private Set<Role> authorities = new HashSet<>();
    private User user;

    public String getAuthenticationToken() {
        return authenticationToken;
    }

    public void setAuthenticationToken(String authenticationToken) {
        this.authenticationToken = authenticationToken;
    }

    public String getLogin() {
        return login;
    }

    public void setLogin(String login) {
        this.login = login;
    }

    public Instant getExpiresAt() {
        return expiresAt;
    }

    public void setExpiresAt(Instant expiresAt) {
        this.expiresAt = expiresAt;
    }

    public String getRefreshToken() {
        return refreshToken;
    }

    public void setRefreshToken(String refreshToken) {
        this.refreshToken = refreshToken;
    }

    public Set<Role> getAuthorities() {
        return authorities;
    }

    public void setAuthorities(Set<Role> authorities) {
        this.authorities = authorities;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }
}
