package com.projet.formation.services.impl;

import com.projet.formation.dto.AjoutResponse;
import com.projet.formation.repository.PaysRepository;
import com.projet.formation.services.PaysService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PaysServiceImpl implements PaysService {
    @Autowired
    private PaysRepository paysRepository;
    @Override
    public AjoutResponse deleteById(long id){
        AjoutResponse ajoutResponse = new AjoutResponse();
        try{
            paysRepository.deleteById(id);
            ajoutResponse.setMessage("success");
        }catch (Exception e){
            ajoutResponse.setMessage("error");
        }
        return ajoutResponse;
    }
}
