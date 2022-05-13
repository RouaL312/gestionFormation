package com.projet.formation.Dto;

import com.projet.formation.models.Pays;
import lombok.Getter;
import lombok.Setter;
import org.bongiorno.dto.support.AbstractDto;
@Getter
@Setter
public class ParticipantDto extends AbstractDto {
    Long id ;
    String nom ;
    String prenom ;
    String email;
    String tel;
    Pays pays ;
}
