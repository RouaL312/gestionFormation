package com.b2m.sbsresto.repository;

import com.b2m.sbsresto.models.Version;
import org.springframework.data.jpa.repository.JpaRepository;

public interface VersionRepository extends JpaRepository<Version, String> {
}
