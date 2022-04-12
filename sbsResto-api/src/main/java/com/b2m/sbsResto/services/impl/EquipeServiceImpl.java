package com.b2m.sbsresto.services.impl;

import com.b2m.sbsresto.models.Equipe;
import com.b2m.sbsresto.repository.EquipeRepository;
import com.b2m.sbsresto.services.EquipeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
public class EquipeServiceImpl implements EquipeService {
    @Autowired
    EquipeRepository equipeRepository;


    @Override
    public void deleteEquipe(long idEquipe) {
        Equipe equipe = equipeRepository.getById(idEquipe);
        equipeRepository.saveAndFlush(equipe);
        equipeRepository.deleteById(idEquipe);
    }

}
