package com.projet.formation.dto;

import com.projet.formation.models.Domaine;
import lombok.Getter;
import lombok.Setter;
import org.bongiorno.dto.support.AbstractDto;

@Getter
@Setter
public class FormationDto extends AbstractDto {
    private Long formationId;
    private String titre;
    private String typeFormation;
    private int nbSession;
    private int duree;
    private double budget;
     Domaine domaine;

}
