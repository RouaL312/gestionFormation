package com.projet.formation.services.impl;

import com.projet.formation.dto.AjoutResponse;
import com.projet.formation.models.Organisme;
import com.projet.formation.repository.OrganismeRepository;
import com.projet.formation.repository.SessionRepository;
import com.projet.formation.services.OrganismeService;
import com.projet.formation.services.SessionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
public class OrganismeServiceImpl implements OrganismeService {

        @Autowired
        private OrganismeRepository organismeRepository;
        @Override
        public AjoutResponse deleteById(long id) {
            AjoutResponse ajoutResponse = new AjoutResponse();
            try {
                organismeRepository.deleteById(id);
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
