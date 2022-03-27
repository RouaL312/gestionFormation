package com.b2m.sbsResto.Dto;

import org.bongiorno.dto.support.AbstractDto;

import java.util.Date;

public class EquipePeriodeDto extends AbstractDto {
    private String libelleEquipePeriode;
    private Date tempsDebut;
    private Date tempsFin;

    public String getLibelleEquipePeriode() {
        return libelleEquipePeriode;
    }

    public void setLibelleEquipePeriode(String libelleEquipePeriode) {
        this.libelleEquipePeriode = libelleEquipePeriode;
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
