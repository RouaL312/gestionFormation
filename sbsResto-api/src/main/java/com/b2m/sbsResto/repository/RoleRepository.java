package com.b2m.sbsResto.repository;

import com.b2m.sbsResto.models.Role;
import com.b2m.sbsResto.models.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface RoleRepository extends JpaRepository<Role, Long> {
    Optional<Role> findByName(String name);


}
