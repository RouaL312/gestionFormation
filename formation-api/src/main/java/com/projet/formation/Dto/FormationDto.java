package com.projet.formation.dto;

import com.projet.formation.models.Domaine;
import lombok.Getter;
import lombok.Setter;
import org.bongiorno.dto.support.AbstractDto;

@Getter
@Setter
public class FormationDto extends AbstractDto {
     Long formationId;
     String titre;
     String typeFormation;
     int nbSession;
     int duree;
     double budget;
     Domaine domaine;

}
