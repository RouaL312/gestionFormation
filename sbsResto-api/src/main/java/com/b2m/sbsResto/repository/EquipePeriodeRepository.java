package com.b2m.sbsResto.repository;

import com.b2m.sbsResto.models.EquipePeriode;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EquipePeriodeRepository extends JpaRepository<EquipePeriode, Long> {
}
