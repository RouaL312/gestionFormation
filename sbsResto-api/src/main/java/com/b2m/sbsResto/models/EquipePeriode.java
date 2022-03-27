package com.b2m.sbsResto.models;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;

@Entity
@Table(name="equipeperiode")
@SequenceGenerator(name = "id_equipe_periode_seq", sequenceName = "id_equipe_periode_seq", allocationSize = 1, initialValue = 1)
public class EquipePeriode implements Serializable {

    @Id
    @Column(name = "id_equipe_periode")
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "id_equipe_periode_seq")
    private long id;


    @Column(name = "libelle_shift_equipe")
    private String libelle;

    @JsonDeserialize
    @Column(name = "temps_debut")
    @JsonFormat(pattern = "HH:mm")
    private Date tempsDebut;

    @JsonDeserialize
    @Column(name = "temps_fin")
    @JsonFormat(pattern = "HH:mm")
    private Date tempsFin;

    public EquipePeriode(String libelle, Date tempsDebut , Date tempsFin){
        this.libelle=libelle;
        this.tempsDebut=tempsDebut;
        this.tempsFin=tempsFin;
    }
    public EquipePeriode(){}

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getLibelle() {
        return libelle;
    }

    public void setLibelle(String libelle) {
        this.libelle = libelle;
    }

    public Date getTempsDebut() {
        return tempsDebut;
    }

    public void setTempsDebut(Date tempsDebut) {
        this.tempsDebut = tempsDebut;
    }

    public Date getTempsFin() {
        return tempsFin;
    }
    public void setTempsFin(Date tempsFin) {
        this.tempsFin = tempsFin;
    }
}

