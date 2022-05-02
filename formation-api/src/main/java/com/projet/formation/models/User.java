package com.projet.formation.models;


import com.fasterxml.jackson.annotation.JsonIgnore;
import org.dom4j.tree.AbstractEntity;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "utilisateur")
@SequenceGenerator(name = "id_user_seq", sequenceName = "id_user_seq", allocationSize = 1, initialValue = 1)
public class User extends AbstractEntity implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "id_user_seq")
    private Long id;
    @NotNull
    @Size(min = 1, max = 50)
    @Column(length = 50, unique = true, nullable = false)
    private String login;
    @JsonIgnore
    @NotNull
    @Size(min = 6, max = 60)
    @Column(name = "pwd_hash", length = 60)
    private String password;
    @Size(max = 50)
    @Column(name = "first_name", length = 50)
    private String firstName;
    @Size(max = 50)
    @Column(name = "last_name", length = 50)
    private String lastName;
    @Size(max = 100)
    @Column(length = 100)
    private String email;
    @Column(nullable = false)
    private boolean activated = false;
    @Column(nullable = false)
    private boolean codePin = false;
    @JsonIgnore
    @ManyToMany(fetch = FetchType.EAGER)
    @JoinTable(
            name = "utilisateur_role",
            joinColumns = {@JoinColumn(name = "utilisateur_id", referencedColumnName = "id")},
            inverseJoinColumns = {@JoinColumn(name = "role_name", referencedColumnName = "name")})
    private Set<Role> authorities = new HashSet<>();

    public Long getId() {
        return id;
    }
    public void setId(Long id) {
        this.id = id;
    }
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
    public String getEmail() {
        return email;
    }
    public void setEmail(String email) {
        this.email = email;
    }
    public boolean getActivated() {
        return activated;
    }
    public void setActivated(boolean activated) {
        this.activated = activated;
    }
    public Set<Role> getAuthorities() {
        return authorities;
    }
    public void setAuthorities(Set<Role> authorities) {
        this.authorities = authorities;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        User user = (User) o;
        if (!login.equals(user.login)) {
            return false;
        }
        return true;
    }
    @Override
    public int hashCode() {
        return login.hashCode();
    }
    @Override
    public String toString() {
        return "User{" +
                "login='" + login + '\'' +
                ", firstName='" + firstName + '\'' +
                ", lastName='" + lastName + '\'' +
                ", email='" + email + '\'' +
                "}";
    }

    public boolean isActivated() {
        return activated;
    }

    public boolean isCodePin() {
        return codePin;
    }

    public void setCodePin(boolean codePin) {
        this.codePin = codePin;
    }
}
