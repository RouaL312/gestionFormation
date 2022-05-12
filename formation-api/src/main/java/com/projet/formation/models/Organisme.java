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
public class Organisme implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="OrganismeId")
    private Long OrganismeId;
    @Column(unique = true,nullable = false)
    private String libelle;

    public Long getOrganismeId() {
        return OrganismeId;
    }

    public void setOrganismeId(Long organismeId) {
        OrganismeId = organismeId;
    }

    public String getLibelle() {
        return libelle;
    }

    public void setLibelle(String libelle) {
        this.libelle = libelle;
    }
}
