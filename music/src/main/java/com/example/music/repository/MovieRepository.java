package com.example.music.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.music.entity.Movie;
import com.example.music.entity.Song;

public interface MovieRepository extends JpaRepository<Movie, Integer>{

    // List<Optional<Song>> findSongsByMovieName(String name);
    
}
