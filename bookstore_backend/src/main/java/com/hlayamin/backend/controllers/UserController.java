package com.hlayamin.backend.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.hlayamin.backend.models.User;
import com.hlayamin.backend.services.UserService;

@RestController
@RequestMapping("/api")
public class UserController {
    @Autowired
    UserService userService;

    // creating new user
    @PostMapping("/user")
    User newUser(@RequestBody User newUser) {
        return userService.saveUser(newUser);
    }

    // get all users
    @GetMapping("/users")
    List<User> getUsers() {
        List<User> users = userService.getAllUsers();
        return users;
    }

    // get users pagination
    @GetMapping("/allusers")
    public Page<User> getAllUsers(@RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size) {
        PageRequest pageable = PageRequest.of(page, size);
        return userService.getUsers(pageable);
    }

}
