package com.example.music.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.example.music.entity.Song;
import com.example.music.service.SongService;

import java.util.List;

@RestController
@RequestMapping("/api/songs")
public class SongController {

    @Autowired
    private SongService songService;

    @PostMapping
    public Song saveSong(@RequestBody Song song) {
        return songService.saveSong(song);
    }

    @GetMapping("/all")
    public List<Song> allSongs(){
        return songService.allSongs();
    }

    @GetMapping("/by-artist/{artistName}")
    public List<Song> findSongsByArtistName(@PathVariable("artistName") String artistName) {
        return songService.findSongsByArtistName(artistName);
    }

    @GetMapping("/by-movie")
    public List<Song> findSongsByMovieName(@RequestParam String movieName) {
        return songService.findSongsByMovieName(movieName);
    }
}

