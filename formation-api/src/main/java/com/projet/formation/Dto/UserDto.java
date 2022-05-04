package com.projet.formation.dto;

import com.projet.formation.models.Role;
import org.bongiorno.dto.support.AbstractDto;

import java.util.Date;
import java.util.HashSet;
import java.util.Set;

public class UserDto extends AbstractDto {
    Long id;
    String firstName;
    String lastName;
    String username;
    String password;
    String email;
    private Date creationDate;
    private Date modificationDate;
    Boolean codePin;
    Boolean activated;

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

    public Boolean getActivated() {
        return activated;
    }

    public void setActivated(Boolean activated) {
        this.activated = activated;
    }

    public Boolean isCodePin() {
        return codePin;
    }

    public void setCodePin(Boolean codePin) {
        this.codePin = codePin;
    }

    public Date getCreationDate() {
        return creationDate;
    }

    public void setCreationDate(Date creationDate) {
        this.creationDate = creationDate;
    }

    public Date getModificationDate() {
        return modificationDate;
    }

    public void setModificationDate(Date modificationDate) {
        this.modificationDate = modificationDate;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }
}

