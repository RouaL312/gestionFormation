package com.projet.formation.repository;

import com.projet.formation.models.Version;
import org.springframework.data.jpa.repository.JpaRepository;

public interface VersionRepository extends JpaRepository<Version, String> {
}
