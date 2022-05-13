package com.projet.formation.dto;

import lombok.Getter;
import lombok.Setter;
import org.bongiorno.dto.support.AbstractDto;

@Getter
@Setter
public class OrganismeDto extends AbstractDto {
    private Long organismeId;
    private String libelle;

    public Long getOrganismeId() {
        return organismeId;
    }

    public void setOrganismeId(Long organismeId) {
        this.organismeId = organismeId;
    }

    public String getLibelle() {
        return libelle;
    }

    public void setLibelle(String libelle) {
        this.libelle = libelle;
    }
}
