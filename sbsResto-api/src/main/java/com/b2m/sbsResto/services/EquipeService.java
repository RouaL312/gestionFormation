package com.b2m.sbsResto.services;

import com.b2m.sbsResto.models.Equipe;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public interface EquipeService {


    void deleteEquipe(long idEquipe);
}
