package com.projet.formation.Dto;

import lombok.Getter;
import lombok.Setter;
import org.bongiorno.dto.support.AbstractDto;
@Getter
@Setter
public class DomaineDto extends AbstractDto {
    private Long IdDomaine;
    private String libelle;
}
