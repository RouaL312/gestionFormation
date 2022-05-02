package com.projet.formation.dto;

import javax.persistence.Column;

public class LoginDto {
    String login;
    String password;
    boolean codePin;

    public String getLogin() {
        return login;
    }

    public void setLogin(String login) {
        this.login = login;
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
        return "{ \"username\":\""+login+"\",\"password\":\""+password+"\"}";
    }
}
