package com.b2m.sbsresto.controllers;

import com.b2m.sbsresto.dto.EquipeDto;
import com.b2m.sbsresto.models.Equipe;
import com.b2m.sbsresto.repository.EquipeRepository;
import com.b2m.sbsresto.services.EquipeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api/equipes")
public class EquipeController {
    @Autowired
    private EquipeService equipeService;
    @Autowired
    private EquipeRepository equipeRepository;

    @GetMapping(value = "/listEquipes")
    public List<EquipeDto> getAllEquipes() {
        List<Equipe> equipeList = equipeRepository.findAll();
        List<EquipeDto> equipeDTOList = new ArrayList<>();
        for (Equipe equipe:equipeList ){
            EquipeDto equipeDTO = new EquipeDto();
            equipeDTO.setUsers(equipe.getUsers());
            equipeDTO.setCodeEquipe(equipe.getCodeEquipe());
            equipeDTO.setId(equipe.getId());
            equipeDTOList.add(equipeDTO);
        }
        return equipeDTOList;
    }

    @PostMapping(value = "/addEquipe")
    public Equipe addEquipe (@RequestBody EquipeDto equipeDTO) {
        Equipe equipe= new Equipe();
        equipe.setId(equipeDTO.getId());
        equipe.setCodeEquipe(equipeDTO.getCodeEquipe());
        return equipeRepository.save(equipe);
    }

    @DeleteMapping(value = "/deleteEquipe")
    public void deleteEquipe (@RequestParam(name="idEquipe",required = true) long idEquipe) {
        equipeService.deleteEquipe(idEquipe);
    }

    @PostMapping(value = "/updateEquipe")
    public void updateEquipe (@RequestBody EquipeDto equipeDTO) {
        Equipe equipe = new Equipe();
        equipe.setId(equipeDTO.getId());
        equipe.setCodeEquipe(equipeDTO.getCodeEquipe());
        equipeRepository.saveAndFlush(equipe);
    }

    @GetMapping(value = "/getEquipe")
    public EquipeDto getEquipeBy(@RequestParam(name="idEquipe",required = true)long id){
        Equipe equipe = equipeRepository.getById(id);
        EquipeDto equipeDTO = new EquipeDto();
        equipeDTO.setId(equipe.getId());
        equipeDTO.setCodeEquipe(equipe.getCodeEquipe());
        equipeDTO.setUsers(equipe.getUsers());
        return equipeDTO;
    }
}
