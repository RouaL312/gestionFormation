package com.b2m.sbsResto.services;


import com.b2m.sbsResto.Dto.AjoutResponse;
import com.b2m.sbsResto.Dto.LoginDto;
import com.b2m.sbsResto.Dto.UserDto;
import com.b2m.sbsResto.models.User;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public interface UserService {
    List<User> getAllUsers(String login);
    AjoutResponse addUser(UserDto userDto);

    User getUserByLogin(String login);

    Boolean verifyPassword(LoginDto loginDto);

    Boolean checkPassword(String pwdUser, String passwordToCheck);

    User getUserById(Long id);

    AjoutResponse deleteUser(long id);
}
