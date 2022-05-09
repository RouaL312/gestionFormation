package com.projet.formation.repository;

import com.projet.formation.models.Formateur;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
@Repository
public interface FormateurRepository extends JpaRepository<Formateur, Long> {

        List<Formateur> getAll();

    List<Formateur> getAllFormateurs();
}
