package com.b2m.sbsResto.repository;

import com.b2m.sbsResto.models.Version;
import org.springframework.data.jpa.repository.JpaRepository;

public interface VersionRepository extends JpaRepository<Version, String> {
}
