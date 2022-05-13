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
    private Long formateurId;
    private String Nom;
    private String Prenom;
    private String email;
    private Long tel;
    private String type;
    private Organisme organisme;


}
