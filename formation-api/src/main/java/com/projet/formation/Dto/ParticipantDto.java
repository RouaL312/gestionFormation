package com.projet.formation.dto;

import com.projet.formation.models.Organisme;
import com.projet.formation.models.Pays;
import lombok.Getter;
import lombok.Setter;
import org.bongiorno.dto.support.AbstractDto;
@Getter
@Setter
public class ParticipantDto  extends AbstractDto {
    private Long participantId;
    private String Nom;
    private String Prenom;
    private String email;
    private Long tel;
    private Pays pays;

}
