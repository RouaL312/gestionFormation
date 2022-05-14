package com.projet.formation.controllers;

import com.projet.formation.dto.AjoutResponse;
import com.projet.formation.dto.LoginDto;
import com.projet.formation.dto.UserDto;
import com.projet.formation.mapper.ObjectMapperUtils;
import com.projet.formation.models.User;
import com.projet.formation.services.UserService;
import com.projet.formation.services.impl.UserServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.Collections;
import java.util.Date;
import java.util.List;
import org.modelmapper.ModelMapper;


@RestController
@RequestMapping("/api/user")
public class UserController {

    @Autowired
    private UserService userService;
    @Autowired
    private UserServiceImpl userServiceImpl;
    ModelMapper modelMapper = new ModelMapper();


    @GetMapping("/users")
    public ResponseEntity <List<UserDto>> getAllUsers(@RequestParam(name = "login", required = true) String login) {
        List<UserDto> listOfUserDTO = ObjectMapperUtils.mapAll(userService.getAllUsers(login), UserDto.class);
        Collections.reverse(listOfUserDTO);
        return new ResponseEntity<>(listOfUserDTO, HttpStatus.OK);
    }
    @PostMapping(value = "/addUser")
    public ResponseEntity<UserDto> addOrUpdateUser(@Valid @RequestBody UserDto userDto) {
        if (userDto.getPassword().length() < 20) {
            userDto.setPassword(userServiceImpl.ecnodePassword(userDto.getPassword()));
        }
        if (userDto.getId() == null) {
            userDto.setCreationDate(new Date());
        } else {
            userDto.setModificationDate(new Date());
        }
        User user = ObjectMapperUtils.map(userDto,User.class);
        UserDto userDto1 = ObjectMapperUtils.map(userService.addOrUpdateUser(user),UserDto.class);
        return new ResponseEntity<>(userDto1, HttpStatus.OK);
    }
    @GetMapping("/getUserByLogin")
    public ResponseEntity<UserDto> getUserByLogin(@RequestParam(name = "login", required = true) String login) {
        UserDto userDTO = modelMapper.map(userService.getAllUsers(login), UserDto.class);
        return new ResponseEntity<>(userDTO, HttpStatus.OK);
    }

//    @GetMapping("/getUserById")
//    public ResponseEntity<UserDto> getUserById(@RequestParam(name = "id", required = true) Long id) {
//        UserDto userDTO = modelMapper.map(userRepository.getOne(id), UserDto.class);
//        return new ResponseEntity<>(userDTO, HttpStatus.OK);
//    }

    @PostMapping("/deleteUser")
    public ResponseEntity deleteUser(@RequestBody long id) {
        AjoutResponse ajoutResponse = new AjoutResponse();
        try{
            ajoutResponse = userService.deleteUser( id);

        }catch (Exception e){
            ajoutResponse.setMessage(e.getMessage());
        }
        return new ResponseEntity(ajoutResponse,HttpStatus.OK);
    }

    @PostMapping("/verifyPassword")
    public ResponseEntity<Boolean> verifyPassword(@RequestBody LoginDto loginDto){
        Boolean updatePassword = userService.verifyPassword(loginDto);
        return new ResponseEntity(updatePassword,HttpStatus.OK);
    }

    @PostMapping("/checkPassword")
    public ResponseEntity<Boolean> checkPassword(@RequestBody com.b2m.sbsresto.dto.CheckPwd checkPwd){
        Boolean check = userService.checkPassword( checkPwd.getPwdUser(), checkPwd.getPasswordToCheck());
        return new ResponseEntity(check,HttpStatus.OK);
    }

}
