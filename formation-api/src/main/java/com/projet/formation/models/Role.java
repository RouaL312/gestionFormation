package com.projet.formation.models;


import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.io.Serializable;

@Entity
@Table(name = "role")
public class Role implements Serializable {
    @NotNull
    @Size(min = 0, max = 50)
    @Id
    @Column(length = 50)
    private String name;
    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
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

