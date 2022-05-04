package com.projet.formation.models;


import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.projet.formation.models.Role;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.io.Serializable;
import java.util.Date;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "utilisateur")
@SequenceGenerator(name = "id_user_seq", sequenceName = "id_user_seq", allocationSize = 1, initialValue = 1)
public class User implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "id_user_seq")
    private Long id;
    @NotNull
    @Size(min = 1, max = 50)
    @Column(length = 50, unique = true, nullable = false)
    private String username;
    @JsonIgnore
    @NotNull
    @Column(name = "pwd_hash")
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
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss")
    private Date creationDate;
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss")
    private Date modificationDate;
    @JsonIgnore
    @ManyToMany(fetch = FetchType.EAGER)
    @JoinTable(
            name = "utilisateur_role",
            joinColumns = {@JoinColumn(name = "utilisateur_id", referencedColumnName = "id")},
            inverseJoinColumns = {@JoinColumn(name = "role_id", referencedColumnName = "id")})
    private Set<Role> authorities = new HashSet<>();

    public Long getId() {
        return id;
    }
    public void setId(Long id) {
        this.id = id;
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

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public void setAuthorities(Set<Role> authorities) {
        this.authorities = authorities;
    }

    public boolean isActivated() {
        return activated;
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

    public boolean isCodePin() {
        return codePin;
    }

    public void setCodePin(boolean codePin) {
        this.codePin = codePin;
    }
}
