package com.b2m.sbsresto.services;

import com.b2m.sbsresto.models.Equipe;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public interface EquipeService {


    void deleteEquipe(long idEquipe);
}
