package com.b2m.sbsResto.Dto;

import com.b2m.sbsResto.models.Equipe;
import com.b2m.sbsResto.models.Role;
import com.b2m.sbsResto.models.User;
import org.bongiorno.dto.support.AbstractDto;

import java.util.HashSet;
import java.util.Set;

public class UserDto extends AbstractDto {
    Long id;
    String firstName;
    String lastName;
    String username;
    String password;
    String email;
    Equipe equipe;

    private Set<Role> authorities = new HashSet<>();

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

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

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Set<Role> getAuthorities() {
        return authorities;
    }

    public void setAuthorities(Set<Role> authorities) {
        this.authorities = authorities;
    }

    public Equipe getEquipe() {
        return equipe;
    }

    public void setEquipe(Equipe equipe) {
        this.equipe = equipe;
    }
}
