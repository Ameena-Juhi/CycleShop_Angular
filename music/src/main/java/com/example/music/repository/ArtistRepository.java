package com.example.music.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.music.entity.Artist;
import com.example.music.entity.Song;

public interface ArtistRepository extends JpaRepository<Artist, Integer>{

    // List<Optional<Song>> findSongsByArtistName(String name);
    
}
