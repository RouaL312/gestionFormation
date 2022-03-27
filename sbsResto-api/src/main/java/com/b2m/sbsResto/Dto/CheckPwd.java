package com.b2m.sbsResto.Dto;

public class CheckPwd {
    String pwdUser;
    String  passwordToCheck;

    public String getPwdUser() {
        return pwdUser;
    }

    public void setPwdUser(String pwdUser) {
        this.pwdUser = pwdUser;
    }

    public String getPasswordToCheck() {
        return passwordToCheck;
    }

    public void setPasswordToCheck(String passwordToCheck) {
        this.passwordToCheck = passwordToCheck;
    }
}
