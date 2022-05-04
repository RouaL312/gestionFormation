package com.projet.formation.dto;

import javax.persistence.Column;

public class LoginDto {
    String username;
    String password;
    boolean codePin;

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public boolean isCodePin() {
        return codePin;
    }

    public void setCodePin(boolean codePin) {
        this.codePin = codePin;
    }

    @Override
    public String toString() {
        return "{ \"username\":\""+username+"\",\"password\":\""+password+"\"}";
    }
}
