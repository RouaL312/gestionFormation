package com.projet.formation.models;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.io.Serializable;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Pays implements Serializable {
    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="PaysId")
    private Long PaysId;
    @Column(unique = true,nullable = false)
    private String libelle;

    public static long getSerialVersionUID() {
        return serialVersionUID;
    }

    public Long getIdPays() {
        return PaysId;
    }

    public void setIdPays(Long idPays) {
        PaysId = idPays;
    }

    public String getLibelle() {
        return libelle;
    }

    public void setLibelle(String libelle) {
        this.libelle = libelle;
    }
}
