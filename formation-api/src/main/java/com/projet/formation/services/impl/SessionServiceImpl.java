package com.projet.formation.services.impl;

import com.projet.formation.dto.AjoutResponse;
import com.projet.formation.repository.SessionRepository;
import com.projet.formation.services.SessionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
@Service
@Transactional
public class SessionServiceImpl implements SessionService {

        @Autowired
        private SessionRepository sessionRepository;
        @Override
        public AjoutResponse deleteById(long id) {
            AjoutResponse ajoutResponse = new AjoutResponse();
            try {
                sessionRepository.deleteById(id);
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
