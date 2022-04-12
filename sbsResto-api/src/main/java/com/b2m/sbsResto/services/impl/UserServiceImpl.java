package com.b2m.sbsresto.services.impl;

import com.b2m.sbsresto.dto.AjoutResponse;
import com.b2m.sbsresto.dto.LoginDto;
import com.b2m.sbsresto.dto.UserDto;
import com.b2m.sbsresto.models.User;
import com.b2m.sbsresto.repository.UserRepository;
import com.b2m.sbsresto.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

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
    public AjoutResponse addUser(UserDto userDto) {
        AjoutResponse ajoutResponse = new AjoutResponse();
        try{
            User user = new User();
            if (userDto.getId() != null) {
                user = userRepository.findById(userDto.getId()).get();
            }
            if (userDto.getUsername()!=null){
                user.setUsername(userDto.getUsername());
            }
            if (userDto.getLastName()!=null){
                user.setLastName(userDto.getLastName());
            }
            if (userDto.getFirstName()!=null){
                user.setFirstName(userDto.getFirstName());
            }
            if (userDto.getPassword() != null) {
                user.setPassword(ecnodePassword(userDto.getPassword()));
            }
            if (!userDto.getAuthorities().isEmpty()){
                user.setAuthorities(userDto.getAuthorities());
            }
            if (userDto.getEmail() != null){
                user.setEmail(userDto.getEmail());
            }
            if (userDto.getEquipe() != null){
                user.setEquipe(userDto.getEquipe());
            }
            if (userDto.getNumTelephone() != null){
                user.setNumTelephone(userDto.getNumTelephone());
            }

            userRepository.save(user);
            ajoutResponse.setMessage("success");
            return ajoutResponse;
        }catch (Exception e){
            ajoutResponse.setMessage("error");
            return ajoutResponse;
        }
    }
    @Override
    public User getUserByLogin(String login) {
        return userRepository.getUserByUsername(login);
    }

    /**
     * verifier password user
     * @param loginDto
     * @return boolean
     */
    @Override
    public Boolean verifyPassword(LoginDto loginDto) {
        Boolean check = false;
        User user= new User();
        user = userRepository.getUserByUsername(loginDto.getUsername());
        check = checkPassword(user.getPassword(),loginDto.getPassword());
        return check;
    }

    /**
     * vérification du password user
     * @param pwdUser
     * @param passwordToCheck
     * @return boolean
     */
    @Override
    public Boolean checkPassword(String pwdUser, String passwordToCheck) {
        this.BCRYPT_PATTERN = Pattern.compile("\\A\\$2a?\\$\\d\\d\\$[./0-9A-Za-z]{53}");
        Boolean check= false;
        if ((pwdUser != null) && (!pwdUser.isEmpty())) {
            if (!this.BCRYPT_PATTERN.matcher(pwdUser).matches()) {
                pwdUser = (ecnodePassword(pwdUser));
            }
        }
        BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
        check = encoder.matches(passwordToCheck,pwdUser);
        return check;
    }

    @Override
    public User getUserById(Long id) {
        return userRepository.getOne(id);
    }

    @Override
    public AjoutResponse deleteUser(long id) {
        AjoutResponse ajoutResponse=new AjoutResponse();
        try{
            userRepository.deleteById(id);
            ajoutResponse.setMessage("success");
        }catch (Exception e){
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
