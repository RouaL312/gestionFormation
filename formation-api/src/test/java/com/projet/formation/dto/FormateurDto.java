package com.projet.formation.dto;

import com.projet.formation.models.Organisme;
import com.projet.formation.models.Session;
import lombok.Getter;
import lombok.Setter;
import org.bongiorno.dto.support.AbstractDto;

import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
public class FormateurDto extends AbstractDto {
     Long FormateurId;
     String Nom;
     String Prenom;
     String email;
     Long tel;
     String type;
     Organisme organisme;





}
