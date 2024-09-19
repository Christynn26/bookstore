package com.hlayamin.backend.services.serviceImpls;

import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.hlayamin.backend.models.User;
import com.hlayamin.backend.repositories.UserRepository;
import com.hlayamin.backend.services.UserService;

@Service
public class UserServiceImpl implements UserService{

    @Autowired
    UserRepository userRepository;

    @Override
    public User saveUser(User user){
        return userRepository.save(user);
    }

    @Override
    public List<User> getAllUsers(){
        return userRepository.findAll();
    }

    @Override
    public Page<User> getUsers(Pageable pageable){
        return userRepository.findAll(pageable);
    }

}
