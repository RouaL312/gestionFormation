package com.projet.formation.dto;

import com.projet.formation.models.Formateur;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;
import org.bongiorno.dto.support.AbstractDto;

import java.util.Date;

@Getter
@Setter
public class SessionDto extends AbstractDto {
    Long sessionId;
    String lieu;
    Date dateDebut;
    Date dateFin;
    int nbParticipants;
    Formateur formateur;
}
