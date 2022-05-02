package com.projet.formation.controllers;

import com.projet.formation.models.User;
import com.projet.formation.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("/api/user")
public class UserController {

    @Autowired
    private UserService userService;


    @GetMapping(value = "/users", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<List<User>> getAllUsers(@RequestParam(name = "login", required = true) String login) {
        return new ResponseEntity<>(userService.getAllUsers(login), HttpStatus.OK);
    }

}
