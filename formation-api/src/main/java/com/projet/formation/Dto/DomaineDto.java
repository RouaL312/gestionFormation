package com.projet.formation.dto;

import lombok.Getter;
import lombok.Setter;
import org.bongiorno.dto.support.AbstractDto;
@Getter
@Setter
public class DomaineDto extends AbstractDto {
    private Long domaineId;
    private String libelle;
}
