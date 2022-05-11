package com.projet.formation.controllers;

import com.projet.formation.dto.AjoutResponse;
import com.projet.formation.dto.OrganismeDto;
import com.projet.formation.mapper.ObjectMapperUtils;
import com.projet.formation.models.Organisme;
import com.projet.formation.repository.OrganismeRepository;
import com.projet.formation.services.OrganismeService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.Collections;
import java.util.List;

@RestController
@RequestMapping("/api/organisme")
public class OrganismeController {
    @Autowired
    private OrganismeService organismeService;
    @Autowired
    private OrganismeRepository organismeRepository;
    ModelMapper modelMapper = new ModelMapper();


    @GetMapping("/organismes")
    public ResponseEntity<List<OrganismeDto>> getAllOrganismes() {
        List<OrganismeDto> listOfOrganismeDto = ObjectMapperUtils.mapAll(organismeRepository.findAll(), OrganismeDto.class);
        Collections.reverse(listOfOrganismeDto);
        return new ResponseEntity<>(listOfOrganismeDto, HttpStatus.OK);
    }

    @PostMapping(value = "/addOrganisme")
    public ResponseEntity<OrganismeDto> addOrUpdateUser(@Valid @RequestBody OrganismeDto organismeDto) {

        Organisme organisme = ObjectMapperUtils.map(organismeDto, Organisme.class);
        OrganismeDto organismeDto1 = ObjectMapperUtils.map(organismeRepository.save(organisme),OrganismeDto.class);
        return new ResponseEntity<>(organismeDto1, HttpStatus.OK);
    }


//    @GetMapping("/getUserById")
//    public ResponseEntity<UserDto> getUserById(@RequestParam(name = "id", required = true) Long id) {
//        UserDto userDTO = modelMapper.map(userRepository.getOne(id), UserDto.class);
//        return new ResponseEntity<>(userDTO, HttpStatus.OK);
//    }

    @PostMapping("/deleteOrganisme")
    public ResponseEntity deleteOrganisme(@RequestBody long id) {
        AjoutResponse ajoutResponse = new AjoutResponse();
        try{
            ajoutResponse = organismeService.deleteById( id);

        }catch (Exception e){
            ajoutResponse.setMessage(e.getMessage());
        }
        return new ResponseEntity(ajoutResponse,HttpStatus.OK);
    }
}
