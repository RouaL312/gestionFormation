package com.projet.formation.services.impl;

import com.projet.formation.models.Role;
import com.projet.formation.models.User;
import com.projet.formation.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import java.util.Set;

@Service
public class UserDetailsServiceImp implements UserDetailsService {

    @Autowired
    private UserRepository userRepository;

    /**
     * Load user by login for authentification
     */
    @Override
    public UserDetails loadUserByUsername(String login) throws UsernameNotFoundException {
        User user = userRepository.findByUsername(login).orElseThrow(()->
                new UsernameNotFoundException("No user found "+login));


        return new org.springframework.security.core.userdetails.User(user.getUsername(),
                user.getPassword(),
                true, true, true, true,
                getAuthorities(user.getAuthorities()));
    }

    private Collection<? extends GrantedAuthority> getAuthorities(Set<Role> roles) {
        List<SimpleGrantedAuthority> authorities = new ArrayList<>();

        for (Role role : roles) {
            authorities.add(new SimpleGrantedAuthority(role.getName()));
        }

        return authorities;
    }

}
