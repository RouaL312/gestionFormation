package com.b2m.sbsResto.repository;

import com.b2m.sbsResto.models.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

    Optional<User> findByUsername(String username);

    User getUserByUsername(String login);

    @Query(value = "SELECT * FROM utilisateur u WHERE u.username != :login", nativeQuery = true)
    List<User> getAllUsers(@Param("login") String login);

}
