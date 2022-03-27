package com.b2m.sbsResto.repository;

import com.b2m.sbsResto.models.Equipe;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
@Repository
public interface EquipeRepository extends JpaRepository<Equipe, String> {

    Equipe getById(long idEquipe);

    void deleteById(long idEquipe);
}
