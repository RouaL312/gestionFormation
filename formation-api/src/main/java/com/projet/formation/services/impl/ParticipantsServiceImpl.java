package com.projet.formation.services.impl;


import com.projet.formation.dto.AjoutResponse;
import com.projet.formation.repository.ParticipantRepository;
import com.projet.formation.services.ParticipantService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
public class ParticipantsServiceImpl implements ParticipantService {
    @Autowired
    private ParticipantRepository participantRepository;

    @Override
    public AjoutResponse deleteById(long id) {
        AjoutResponse ajoutResponse = new AjoutResponse();
        try {
            participantRepository.deleteById(id);
            ajoutResponse.setMessage("success");
        } catch (Exception e) {
            ajoutResponse.setMessage("error");
        }
        return ajoutResponse;
    }

//    @Override
//    public List<Formateur> getFormateurs() {
//        return formateurRepository.getAll();
//
//    }
}
