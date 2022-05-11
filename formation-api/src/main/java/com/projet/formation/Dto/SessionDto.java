package com.projet.formation.dto;

import com.projet.formation.models.Formateur;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;
import org.bongiorno.dto.support.AbstractDto;

@Getter
@Setter
public class SessionDto extends AbstractDto {
    Long SessionId;
    String lieu;
    Data dateDebut;
    Data dateFin;
    int nbParticipants;
    Formateur formateur;
}
