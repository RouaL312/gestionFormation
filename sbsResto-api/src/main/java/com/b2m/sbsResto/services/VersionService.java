package com.b2m.sbsresto.services;


import com.b2m.sbsresto.models.Version;
import org.springframework.stereotype.Service;

@Service
public interface VersionService {
    Version getVersion();
}
