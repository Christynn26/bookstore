package com.hlayamin.backend.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.hlayamin.backend.models.User;

@Repository
public interface UserRepository extends JpaRepository<User, Long>{


}
