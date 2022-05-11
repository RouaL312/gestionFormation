package com.projet.formation.services;

import com.projet.formation.dto.AjoutResponse;
import com.projet.formation.models.Formateur;
import com.projet.formation.models.Role;
import org.springframework.stereotype.Service;

import java.util.List;

public interface FormateurService {
    AjoutResponse deleteById(long id);
//    List<Formateur> getFormateurs();

}
