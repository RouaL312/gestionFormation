package com.projet.formation.controllers;

import com.projet.formation.models.Role;
import com.projet.formation.services.RoleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(value = "/api/role")
public class RoleController {

    @Autowired
    private RoleService roleService;

    @GetMapping("/allRoles")
    public List<Role> getRoles(){
        return roleService.getRoles();
    }

}