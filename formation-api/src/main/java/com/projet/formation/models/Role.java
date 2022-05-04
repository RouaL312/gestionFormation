package com.projet.formation.models;


import javax.persistence.*;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.io.Serializable;

@Entity
@Table(name = "role")
@SequenceGenerator(name = "id_role_seq", sequenceName = "id_role_seq", allocationSize = 1, initialValue = 1)
public class Role implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "id_role_seq")
    private Long id;
    @NotNull
    @Column(length = 50, unique = true, nullable = false)
    private String name;
    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        Role role = (Role) o;
        if (name != null ? !name.equals(role.name) : role.name != null) {
            return false;
        }
        return true;
    }
    @Override
    public int hashCode() {
        return name != null ? name.hashCode() : 0;
    }
    @Override
    public String toString() {
        return "Role{" +
                "name='" + name + '\'' +
                "}";
    }
}

