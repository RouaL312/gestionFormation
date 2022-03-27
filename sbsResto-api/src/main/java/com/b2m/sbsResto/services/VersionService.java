package com.b2m.sbsResto.services;


import com.b2m.sbsResto.models.Version;
import org.springframework.stereotype.Service;

@Service
public interface VersionService {
    Version getVersion();
}
