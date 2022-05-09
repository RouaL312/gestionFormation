package com.projet.formation.services.impl;

import com.projet.formation.models.Formateur;
import com.projet.formation.repository.FormateurRepository;
import com.projet.formation.repository.UserRepository;
import com.projet.formation.services.FormateurService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
@Service
@Transactional
public class FormateurServiceImpl implements FormateurService {
    @Autowired
    private FormateurRepository formateurRepository;
    @Override
    public List<Formateur> getFormateurs() {
        return formateurRepository.getAll();

    }
}
