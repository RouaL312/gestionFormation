package com.projet.formation.repository;

import com.projet.formation.models.Formateur;
import com.projet.formation.models.Formation;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FormationRepository extends JpaRepository<Formation, Long> {
}
