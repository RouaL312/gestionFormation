package com.b2m.sbsResto.controllers;

import com.b2m.sbsResto.models.Version;
import com.b2m.sbsResto.services.VersionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/version")
public class VersionController {
    @Autowired
    private VersionService versionService;

    @GetMapping("/getVersion")
    public Version getVersion(){
        return versionService.getVersion();
    }
}
