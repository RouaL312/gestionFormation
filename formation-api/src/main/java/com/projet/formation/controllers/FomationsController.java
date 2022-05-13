package com.projet.formation.controllers;

import com.projet.formation.dto.AjoutResponse;
import com.projet.formation.dto.FormationDto;
import com.projet.formation.mapper.ObjectMapperUtils;
import com.projet.formation.models.Formation;
import com.projet.formation.repository.FormationRepository;
import com.projet.formation.services.FormationService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.Collections;
import java.util.List;


@RestController
@RequestMapping("/api/formation")
public class FomationsController {

    @Autowired
    private FormationService formationService;
    @Autowired
    private FormationRepository formationRepository;
    ModelMapper modelMapper = new ModelMapper();


    @GetMapping("/formations")
    public ResponseEntity <List<FormationDto>> getAllFormations() {
        List<FormationDto> listOfFormationDto = ObjectMapperUtils.mapAll(formationRepository.findAll(), FormationDto.class);
        Collections.reverse(listOfFormationDto);
        return new ResponseEntity<>(listOfFormationDto, HttpStatus.OK);
    }

    @PostMapping(value = "/addFormation")
    public ResponseEntity<FormationDto> addOrUpdateFormation(@Valid @RequestBody FormationDto formationDto) {

        Formation formation = ObjectMapperUtils.map(formationDto, Formation.class);
        FormationDto formationDto1 = ObjectMapperUtils.map(formationRepository.save(formation),FormationDto.class);
        return new ResponseEntity<>(formationDto1, HttpStatus.OK);
    }

    @PostMapping("/deleteFormation")
    public ResponseEntity deleteFormation(@RequestBody long id) {
        AjoutResponse ajoutResponse = new AjoutResponse();
        try{
            ajoutResponse = formationService.deleteById( id);

        }catch (Exception e){
            ajoutResponse.setMessage(e.getMessage());
        }
        return new ResponseEntity(ajoutResponse,HttpStatus.OK);
    }

}
