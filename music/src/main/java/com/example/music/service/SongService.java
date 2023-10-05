package com.example.music.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.music.entity.Song;
import com.example.music.repository.SongRepository;

import java.util.List;

@Service
public class SongService {

    @Autowired
    private SongRepository songRepository;

    public Song saveSong(Song song) {
        return songRepository.save(song);
    }

    public List<Song> allSongs(){
        return songRepository.findAll();
    }



    public List<Song> findSongsByArtistName(String artistName) {
        return songRepository.findByArtistsSongs(artistName);
    }

    public List<Song> findSongsByMovieName(String movieName) {
        return songRepository.findByMovieSongs(movieName);

    }

    
}
