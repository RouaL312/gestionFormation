package com.projet.formation.services.impl;

import com.projet.formation.dto.AjoutResponse;
import com.projet.formation.dto.LoginDto;
import com.projet.formation.models.User;
import com.projet.formation.repository.UserRepository;
import com.projet.formation.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Date;
import java.util.List;
import java.util.regex.Pattern;

@Service
@Transactional
public class UserServiceImpl implements UserService {
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private PasswordEncoder passwordEncoder;

    private Pattern BCRYPT_PATTERN;

    @Override
    public List<User> getAllUsers(String login) {
        return userRepository.getAllUsers(login);
    }

    @Override
    public User addOrUpdateUser(User user) {
        user.setPassword(ecnodePassword(user.getPassword()));
        return userRepository.save(user);
    }

    @Override
    public User getUserByLogin(String login) {
        return userRepository.getUserByUsername(login);
    }

    /**
     * verifier password user
     *
     * @param loginDto
     * @return boolean
     */
    @Override
    public Boolean verifyPassword(LoginDto loginDto) {
        Boolean check = false;
        User user = new User();
        user = userRepository.getUserByUsername(loginDto.getUsername());
        check = checkPassword(user.getPassword(), loginDto.getPassword());
        return check;
    }

    /**
     * vérification du password user
     *
     * @param pwdUser
     * @param passwordToCheck
     * @return boolean
     */
    @Override
    public Boolean checkPassword(String pwdUser, String passwordToCheck) {
        this.BCRYPT_PATTERN = Pattern.compile("\\A\\$2a?\\$\\d\\d\\$[./0-9A-Za-z]{53}");
        Boolean check = false;
        if ((pwdUser != null) && (!pwdUser.isEmpty())) {
            if (!this.BCRYPT_PATTERN.matcher(pwdUser).matches()) {
                pwdUser = (ecnodePassword(pwdUser));
            }
        }
        BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
        check = encoder.matches(passwordToCheck, pwdUser);
        return check;
    }

    @Override
    public User getUserById(Long id) {
        return userRepository.getOne(id);
    }

    @Override
    public AjoutResponse deleteUser(long id) {
        AjoutResponse ajoutResponse = new AjoutResponse();
        try {
            userRepository.deleteById(id);
            ajoutResponse.setMessage("success");
        } catch (Exception e) {
            ajoutResponse.setMessage("error");
        }
        return ajoutResponse;
    }

    /**
     * Encode Password before saving user using BCryptPasswordEncoder
     */
    private String ecnodePassword(String password) {
        return passwordEncoder.encode(password);
    }
}
