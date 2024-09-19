package com.hlayamin.backend.services;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import com.hlayamin.backend.models.User;

public interface UserService {
    User saveUser(User user);
    List<User> getAllUsers();
    Page<User> getUsers(Pageable pageable);
}
