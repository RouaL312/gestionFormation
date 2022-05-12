package com.projet.formation.services.impl;

import com.projet.formation.dto.AjoutResponse;
import com.projet.formation.repository.DomaineRepository;
import com.projet.formation.services.DomaineService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class DomaineServiceImpl implements DomaineService {
    @Autowired
    private DomaineRepository domaineRepository;
    @Override
    public AjoutResponse deleteById(long id){
        AjoutResponse ajoutResponse = new AjoutResponse();
        try{
            domaineRepository.deleteById(id);
            ajoutResponse.setMessage("success");
        }catch (Exception e){
            ajoutResponse.setMessage("error");
        }
        return ajoutResponse;
    }
}
