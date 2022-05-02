package com.projet.formation.models;


import javax.persistence.*;

@Entity
@Table(name = "version")
public class Version {
    @Id
    @Column(name = "version")
    private String version;

    public String getVersion() {
        return version;
    }

    public void setVersion(String version) {
        this.version = version;
    }
}

