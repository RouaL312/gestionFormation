package com.b2m.sbsResto.controllers;

import com.b2m.sbsResto.Dto.EquipePeriodeDto;
import com.b2m.sbsResto.models.EquipePeriode;
import com.b2m.sbsResto.repository.EquipePeriodeRepository;
import com.b2m.sbsResto.services.EquipePeriodeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/equipesPeriode")
public class EquipePeriodeController {

    @Autowired
    private EquipePeriodeService equipePeriodeService;
    @Autowired
    private EquipePeriodeRepository equipePeriodeRepository;

    @GetMapping(value = "/listEquipePeriode")
    public List<EquipePeriode> getAllEquipePeriode() {
        return equipePeriodeRepository.findAll();

    }

    @PostMapping(value = "/addEquipePeriode")
    public EquipePeriode addEquipePeriode(@RequestBody EquipePeriodeDto equipePeriodeDto) {
        EquipePeriode equipePeriode = new EquipePeriode();
        equipePeriode.setTempsDebut(equipePeriodeDto.getTempsDebut());
        equipePeriode.setTempsFin(equipePeriodeDto.getTempsFin());
        equipePeriode.setLibelle(equipePeriodeDto.getLibelleEquipePeriode());
        return equipePeriodeRepository.save(equipePeriode);
    }

    @DeleteMapping(value = "/deleteEquipePeriode")
    public void deleteEquipePeriode(@RequestParam(name = "idEquipePeriode", required = true) long idEquipePeriode) {
        equipePeriodeRepository.deleteById(idEquipePeriode);
    }

    @PostMapping(value = "/updateEquipePeriode")
    public void updateEquipePeriode(@RequestBody EquipePeriode equipePeriode) {
        equipePeriodeRepository.saveAndFlush(equipePeriode);
    }

    @GetMapping(value = "/getEquipePeriode")
    public EquipePeriode getEquipePeriodeBy(@RequestParam(name = "idEquipePeriode", required = true) long id) {
        return equipePeriodeRepository.getOne(id);
    }
}
