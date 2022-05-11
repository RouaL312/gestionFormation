package com.projet.formation.controllers;

import com.projet.formation.dto.AjoutResponse;
import com.projet.formation.dto.SessionDto;
import com.projet.formation.mapper.ObjectMapperUtils;
import com.projet.formation.models.Session;
import com.projet.formation.repository.SessionRepository;
import com.projet.formation.services.SessionService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.Collections;
import java.util.List;

@RestController
@RequestMapping("/api/session")
public class SessionController {


    @Autowired
    private SessionService sessionService;
    @Autowired
    private SessionRepository sessionRepository;
    ModelMapper modelMapper = new ModelMapper();


    @GetMapping("/sessions")
    public ResponseEntity<List<SessionDto>> getAllSessions() {
        List<SessionDto> listOfSessionDto = ObjectMapperUtils.mapAll(sessionRepository.findAll(), SessionDto.class);
        Collections.reverse(listOfSessionDto);
        return new ResponseEntity<>(listOfSessionDto, HttpStatus.OK);
    }

    @PostMapping(value = "/addSession")
    public ResponseEntity<SessionDto> addOrUpdateSession(@Valid @RequestBody SessionDto sessionDto) {

        Session session = ObjectMapperUtils.map(sessionDto, Session.class);
        SessionDto SessionDto1 = ObjectMapperUtils.map(sessionRepository.saveAndFlush(session),SessionDto.class);
        return new ResponseEntity<>(SessionDto1, HttpStatus.OK);
    }


//    @GetMapping("/getUserById")
//    public ResponseEntity<UserDto> getUserById(@RequestParam(name = "id", required = true) Long id) {
//        UserDto userDTO = modelMapper.map(userRepository.getOne(id), UserDto.class);
//        return new ResponseEntity<>(userDTO, HttpStatus.OK);
//    }

    @PostMapping("/deleteSession")
    public ResponseEntity deleteSession(@RequestBody long id) {
        AjoutResponse ajoutResponse = new AjoutResponse();
        try{
            ajoutResponse = sessionService.deleteById( id);

        }catch (Exception e){
            ajoutResponse.setMessage(e.getMessage());
        }
        return new ResponseEntity(ajoutResponse,HttpStatus.OK);
    }
}
