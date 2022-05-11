package com.projet.formation.dto;

import lombok.Getter;
import lombok.Setter;
import org.bongiorno.dto.support.AbstractDto;

@Getter
@Setter
public class OrganismeDto extends AbstractDto {
    Long OrganismeId;
    String libelle;
}
