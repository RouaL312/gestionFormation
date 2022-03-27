package com.b2m.sbsResto.services.impl;

import com.b2m.sbsResto.models.Equipe;
import com.b2m.sbsResto.repository.EquipeRepository;
import com.b2m.sbsResto.services.EquipeService;
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
        equipe.setEquipePeriode(null);
        equipeRepository.saveAndFlush(equipe);
        equipeRepository.deleteById(idEquipe);
    }

}
