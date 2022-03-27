package com.b2m.sbsResto.Dto;

import com.b2m.sbsResto.models.EquipePeriode;
import com.b2m.sbsResto.models.User;

import java.util.Date;
import java.util.HashSet;
import java.util.Set;

public class EquipeDto {
    private long id;
    private String codeEquipe;
    private String libelleEquipe;
    private String libelleEquipePeriode;
    private EquipePeriode equipePeriode;
    private Set<User> users = new HashSet<>();


    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getCodeEquipe() {
        return codeEquipe;
    }

    public void setCodeEquipe(String codeEquipe) {
        this.codeEquipe = codeEquipe;
    }

    public String getLibelleEquipe() {
        return libelleEquipe;
    }

    public void setLibelleEquipe(String libelleEquipe) {
        this.libelleEquipe = libelleEquipe;
    }

    public String getLibelleEquipePeriode() {
        return libelleEquipePeriode;
    }

    public void setLibelleEquipePeriode(String libelleEquipePeriode) {
        this.libelleEquipePeriode = libelleEquipePeriode;
    }

    public EquipePeriode getEquipePeriode() {
        return equipePeriode;
    }

    public void setEquipePeriode(EquipePeriode equipePeriode) {
        this.equipePeriode = equipePeriode;
    }

    public Set<User> getUsers() {
        return users;
    }

    public void setUsers(Set<User> users) {
        this.users = users;
    }
}
