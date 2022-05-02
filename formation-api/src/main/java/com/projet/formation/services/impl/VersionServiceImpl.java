package com.projet.formation.services.impl;

import com.projet.formation.models.Version;
import com.projet.formation.repository.VersionRepository;
import com.projet.formation.services.VersionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@Service
@Transactional
public class VersionServiceImpl implements VersionService {

    @Autowired
    private VersionRepository versionRepository;

    @Override
    public Version getVersion() {
        return versionRepository.findAll().stream().findFirst().orElse(null);
    }
}
