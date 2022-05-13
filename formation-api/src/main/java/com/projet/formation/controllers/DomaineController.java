package com.projet.formation.controllers;

import com.projet.formation.dto.DomaineDto;
import com.projet.formation.dto.AjoutResponse;
import com.projet.formation.mapper.ObjectMapperUtils;
import com.projet.formation.models.Domaine;
import com.projet.formation.repository.DomaineRepository;
import com.projet.formation.services.DomaineService;
import org.aspectj.weaver.loadtime.Aj;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.Collections;
import java.util.List;

@RestController
@RequestMapping("/api/domaine")
public class DomaineController {
    @Autowired
    private DomaineService domaineService;
    @Autowired
    private DomaineRepository domaineRepository;
    @GetMapping("/domaine")
    public ResponseEntity<List<DomaineDto>> getAllDomaines(){
        List<DomaineDto> listOfDomainesDto= ObjectMapperUtils.mapAll(domaineRepository.findAll(),DomaineDto.class);
        Collections.reverse(listOfDomainesDto);
        return new ResponseEntity<>(listOfDomainesDto, HttpStatus.OK);
    }
    @PostMapping("/addDomaine")
    public ResponseEntity<DomaineDto>addOrUpdateDomaine(@Valid @RequestBody DomaineDto domaineDto){
        Domaine domaine =ObjectMapperUtils.map(domaineDto, Domaine.class);
        DomaineDto domaineDto1 = ObjectMapperUtils.map(domaineRepository.save(domaine),DomaineDto.class);
        return new ResponseEntity<>(domaineDto1,HttpStatus.OK);
    }
    @PostMapping("/deleteDomaine")
    public ResponseEntity deleteDomaine(@RequestBody long id){
        AjoutResponse ajoutResponse = new AjoutResponse();
        try{
            ajoutResponse=domaineService.deleteById(id);

        }catch (Exception e){
            ajoutResponse.setMessage(e.getMessage());
        }
        return new ResponseEntity(ajoutResponse,HttpStatus.OK);
    }
}
