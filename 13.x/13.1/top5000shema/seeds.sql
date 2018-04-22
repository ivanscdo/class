SELECT
top3000.artist AS album_artist,
top3000.position AS album_position, 
album,
top3000.year AS album_year, 
top5000.position AS song_position,
top5000.song AS song, 
top5000.year AS song_year
FROM top3000
INNER JOIN top5000 ON top5000.year = top3000.year
WHERE top3000.artist = "The Beatles" AND top5000.artist = "The Beatles";