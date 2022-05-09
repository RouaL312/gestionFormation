package com.projet.formation.services;

import com.projet.formation.models.Formateur;
import com.projet.formation.models.Role;
import org.springframework.stereotype.Service;

import java.util.List;

public interface FormateurService {
    List<Formateur> getFormateurs();

}
