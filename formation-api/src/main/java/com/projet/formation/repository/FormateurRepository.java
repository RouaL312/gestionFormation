package com.projet.formation.repository;

import com.projet.formation.models.Formateur;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
public interface FormateurRepository extends JpaRepository<Formateur, Long> {

}
