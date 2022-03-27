package com.b2m.sbsResto.controllers;

import com.b2m.sbsResto.Dto.RoleDto;
import com.b2m.sbsResto.models.Role;
import com.b2m.sbsResto.repository.RoleRepository;
import com.b2m.sbsResto.services.RoleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping(value = "/api/role")
public class RolesController  {

    @Autowired
    private RoleService roleService;
    @Autowired
    private RoleRepository roleRepository;
    @GetMapping(value = "/allRoles", produces = MediaType.APPLICATION_JSON_VALUE)
    public List<RoleDto> getAllRoles() {
        List<Role> roleList = roleRepository.findAll();
        List<RoleDto> roleDtoList = new ArrayList<>();
        for (Role role:roleList ){
            RoleDto roleDTO = new RoleDto();
            roleDTO.setNameRole(role.getName());
            roleDTO.setId(role.getId());
            roleDtoList.add(roleDTO);
        }
        return roleDtoList;
    }
    @PostMapping(value = "/addRole")
    public Role addRole (@RequestBody RoleDto roleDTO) {
        Role role= new Role();
        role.setId(roleDTO.getId());
        role.setName(roleDTO.getNameRole());
        return roleRepository.save(role);
    }

    @DeleteMapping(value = "/deleteRole")
    public void deleteRole (@RequestParam(name="idRole",required = true) long idRole) {
        roleRepository.deleteById(idRole);
    }

    @PostMapping(value = "/updateRole")
    public void updateRole (@RequestBody RoleDto roleDTO) {
        Role role = new Role();
        role.setId(roleDTO.getId());
        role.setName(roleDTO.getNameRole());
        roleRepository.saveAndFlush(role);
    }



}
