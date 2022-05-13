package com.projet.formation.controllers;

import com.projet.formation.dto.PaysDto;
import com.projet.formation.dto.AjoutResponse;
import com.projet.formation.mapper.ObjectMapperUtils;
import com.projet.formation.models.Pays;
import com.projet.formation.repository.PaysRepository;
import com.projet.formation.services.PaysService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.Collections;
import java.util.List;

@RestController
@RequestMapping("/api/pays")
public class PaysController {
    @Autowired
    private PaysService paysService;
    @Autowired
    private PaysRepository paysRepository;

    @GetMapping("/pays")
    public ResponseEntity<List<PaysDto>> getAllPays(){
        List<PaysDto> listOfPaysDto = ObjectMapperUtils.mapAll(paysRepository.findAll(),PaysDto.class);
        Collections.reverse(listOfPaysDto);
        return new ResponseEntity<>(listOfPaysDto, HttpStatus.OK);
    }
    @PostMapping("/addPays")
    public ResponseEntity<PaysDto> addOrUpdatePays(@Valid @RequestBody PaysDto paysDto){
        Pays pays = ObjectMapperUtils.map(paysDto, Pays.class);
        PaysDto paysDto1=ObjectMapperUtils.map(paysRepository.save(pays),PaysDto.class);
        return new ResponseEntity<>(paysDto1,HttpStatus.OK);
    }
    @PostMapping("/deletePays")
    public ResponseEntity deletePays(@RequestBody long id){
        AjoutResponse ajoutResponse = new AjoutResponse();
        try{
            ajoutResponse= paysService.deleteById(id);
        }catch (Exception e){
            ajoutResponse.setMessage(e.getMessage());
        }
        return new ResponseEntity(ajoutResponse,HttpStatus.OK);
    }

}
