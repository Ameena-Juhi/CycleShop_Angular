package com.example.music.repository;

import java.util.List;
// import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.example.music.entity.Song;

public interface SongRepository extends JpaRepository<Song,Integer> {

    @Query(value = "SELECT s.id AS song_id, s.name AS song_name, s.category AS song_category, s.artists AS song_artist,s.movie AS movie_name, s.language AS song_language FROM song s JOIN song_artist sa ON s.id = sa.song_id JOIN artist a ON sa.artist_id = a.id WHERE a.name = :name", nativeQuery = true)
    List<Song> findByArtistsSongs(String name);

    //  @Query(value = "SELECT * FROM song s JOIN song_artist sa ON s.id = sa.song_id JOIN artist a ON sa.artist_id = a.id WHERE a.name = :name", nativeQuery = true)
    // List<Song> findByArtistsSongs(String name);

    // @Query(value = "SELECT * FROM Song s JOIN Movie m ON s.movie_id = m.id WHERE m.name = :name", nativeQuery = true)
    // List<Song> findByMovieSongs(String name);

    // @Query(value = "SELECT * FROM Song WHERE category = :categoryName", nativeQuery = true)
    // List<Song> findByCategorySongs(String categoryName);

    // @Query(value = "SELECT * FROM Song WHERE name = :songName", nativeQuery = true)
    // Song findBySong(String songName);

}
