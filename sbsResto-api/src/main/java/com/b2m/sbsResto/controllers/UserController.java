package com.b2m.sbsResto.controllers;

import com.b2m.sbsResto.Dto.AjoutResponse;
import com.b2m.sbsResto.Dto.CheckPwd;
import com.b2m.sbsResto.Dto.LoginDto;
import com.b2m.sbsResto.Dto.UserDto;
import com.b2m.sbsResto.models.User;
import com.b2m.sbsResto.repository.UserRepository;
import com.b2m.sbsResto.services.UserService;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/user")
public class UserController extends AbstractController<UserDto, User> {
    @Autowired
    private UserService userService;
    @Autowired
    private UserRepository userRepository;

    ModelMapper modelMapper = new ModelMapper();


    @GetMapping(value = "/users", produces = MediaType.APPLICATION_JSON_VALUE)
    public List<User> getAllUsers(@RequestParam(name = "login", required = true) String login) {
        List<User> listUser =userRepository.getAllUsers(login);
        return listUser;
    }


//    @GetMapping(value = "/users", produces = MediaType.APPLICATION_JSON_VALUE)
//    public ResponseEntity<List<UserDto>> getAllUsers(@RequestParam(name = "login", required = true) String login) {
//        List<User> userList = userService.getAllUsers(login);
//        List<UserDto> userListDtos = new ArrayList<>();
//        for (User user : userList) {
//            UserDto userDto = new UserDto();
//            modelMapper.map(user, userDto);
//            userListDtos.add(userDto);
//        }
//        return new ResponseEntity<>(userListDtos, HttpStatus.OK);
//    }
    @PostMapping("/addUser")
    public ResponseEntity addUser(@RequestBody UserDto userDto) {
        AjoutResponse ajoutResponse = new AjoutResponse();
        try{
            ajoutResponse = userService.addUser(userDto);
        }catch (DataIntegrityViolationException e){
            ajoutResponse.setMessage("Login existant");
        }
        return new ResponseEntity(ajoutResponse, HttpStatus.OK);
    }
    @GetMapping("/getUserByLogin")
    public ResponseEntity<User> getUserByLogin(@RequestParam(name = "login", required = true) String login) {
        User user= userService.getUserByLogin(login);
        return new ResponseEntity<>(user, HttpStatus.OK);
    }

    @GetMapping("/getUserById")
    public ResponseEntity<UserDto> getUserById(@RequestParam(name = "id", required = true) Long id) {
        UserDto userDTO = modelMapper.map(userRepository.getOne(id), UserDto.class);
        return new ResponseEntity<>(userDTO, HttpStatus.OK);
    }

    @PostMapping("/deleteUser")
    public ResponseEntity deleteUser(@RequestBody long id) {
        AjoutResponse ajoutResponse = new AjoutResponse();
        try{
            ajoutResponse = userService.deleteUser( id);

        }catch (Exception e){
            ajoutResponse.setMessage("error");
        }
        return new ResponseEntity(ajoutResponse,HttpStatus.OK);
    }

    @PostMapping("/verifyPassword")
    public ResponseEntity<Boolean> verifyPassword(@RequestBody LoginDto loginDto){
        Boolean updatePassword = userService.verifyPassword(loginDto);
        return new ResponseEntity(updatePassword,HttpStatus.OK);
    }

    @PostMapping("/checkPassword")
    public ResponseEntity<Boolean> checkPassword(@RequestBody CheckPwd checkPwd){
        Boolean check = userService.checkPassword( checkPwd.getPwdUser(), checkPwd.getPasswordToCheck());
        return new ResponseEntity(check,HttpStatus.OK);
    }

}