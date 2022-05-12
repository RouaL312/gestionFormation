package com.projet.formation.Dto;

import lombok.Getter;
import lombok.Setter;
import org.bongiorno.dto.support.AbstractDto;
@Getter
@Setter
public class PaysDto extends AbstractDto {
    Long IdPays;
    String libelle;
}
