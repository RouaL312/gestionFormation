package com.projet.formation.controllers;

import com.projet.formation.dto.FormateurDto;
import com.projet.formation.dto.AjoutResponse;

import com.projet.formation.dto.LoginDto;
import com.projet.formation.dto.UserDto;
import com.projet.formation.mapper.ObjectMapperUtils;
import com.projet.formation.models.Formateur;
import com.projet.formation.models.User;
import com.projet.formation.services.FormateurService;
import com.projet.formation.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.projet.formation.repository.FormateurRepository;

import javax.validation.Valid;
import java.util.Collections;
import java.util.Date;
import java.util.List;
import org.modelmapper.ModelMapper;


@RestController
@RequestMapping("/api/formateur")
public class FormateursController {

    @Autowired
    private FormateurService formateurService;
    @Autowired
    private FormateurRepository formateurRepository;
    ModelMapper modelMapper = new ModelMapper();


    @GetMapping("/formateurs")
    public ResponseEntity <List<FormateurDto>> getAllFormateurs() {
        List<FormateurDto> listOfFormateurDto = ObjectMapperUtils.mapAll(formateurRepository.findAll(), FormateurDto.class);
        Collections.reverse(listOfFormateurDto);
        return new ResponseEntity<>(listOfFormateurDto, HttpStatus.OK);
    }

    @PostMapping(value = "/addFormateur")
    public ResponseEntity<FormateurDto> addOrUpdateFormateur(@Valid @RequestBody FormateurDto formateurDto) {

        Formateur formateur = ObjectMapperUtils.map(formateurDto, Formateur.class);
        FormateurDto formateurDto1 = ObjectMapperUtils.map(formateurRepository.save(formateur),FormateurDto.class);
        return new ResponseEntity<>(formateurDto1, HttpStatus.OK);
    }


//    @GetMapping("/getUserById")
//    public ResponseEntity<UserDto> getUserById(@RequestParam(name = "id", required = true) Long id) {
//        UserDto userDTO = modelMapper.map(userRepository.getOne(id), UserDto.class);
//        return new ResponseEntity<>(userDTO, HttpStatus.OK);
//    }

    @PostMapping("/deleteFormateur")
    public ResponseEntity deleteFormateur(@RequestBody long id) {
        AjoutResponse ajoutResponse = new AjoutResponse();
        try{
            ajoutResponse = formateurService.deleteById( id);

        }catch (Exception e){
            ajoutResponse.setMessage(e.getMessage());
        }
        return new ResponseEntity(ajoutResponse,HttpStatus.OK);
    }

}
