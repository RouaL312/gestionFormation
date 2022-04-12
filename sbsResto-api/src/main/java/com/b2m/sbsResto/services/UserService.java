package com.b2m.sbsresto.services;


import com.b2m.sbsresto.dto.AjoutResponse;
import com.b2m.sbsresto.dto.LoginDto;
import com.b2m.sbsresto.dto.UserDto;
import com.b2m.sbsresto.models.User;
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
