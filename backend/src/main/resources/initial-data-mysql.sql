INSERT INTO `role` (name)
VALUES ('guest');

INSERT INTO user(email, password, role_id) VALUES ('pam@mail.com', '0123456', 1);

INSERT INTO singer(stage_name) VALUES ('Metallica');
INSERT INTO singer(stage_name) VALUES ('Lady Gaga');
INSERT INTO singer(stage_name) VALUES ('Rihanna');
INSERT INTO singer(stage_name) VALUES ('Led Zeppelin');

INSERT INTO genre(name) VALUES ('Rock');
INSERT INTO genre(name) VALUES ('Pop');
INSERT INTO genre(name) VALUES ('Rap');
INSERT INTO genre(name) VALUES ('Metal');

INSERT INTO song(name, year, genre_id, user_id, album_cover)
VALUES ('One', 1973, 4, 2, LOAD_FILE('/home/tijanajanjic/Documents/PMF/8. semestar/PRIS/music-max/backend/src/main/resources/Metallica_-_One_cover.jpg'));
INSERT INTO song(name, year, genre_id, user_id, album_cover)
VALUES ('Two', 1973, 4, 2, LOAD_FILE('/home/tijanajanjic/Documents/PMF/8. semestar/PRIS/music-max/backend/src/main/resources/Metallica_-_One_cover.jpg'));
INSERT INTO song(name, year, genre_id, user_id, album_cover)
VALUES ('Three', 1973, 4, 2, LOAD_FILE('/home/tijanajanjic/Documents/PMF/8. semestar/PRIS/music-max/backend/src/main/resources/Metallica_-_One_cover.jpg'));
INSERT INTO song(name, year, genre_id, user_id, album_cover)
VALUES ('Four', 1973, 4, 2, LOAD_FILE('/home/tijanajanjic/Documents/PMF/8. semestar/PRIS/music-max/backend/src/main/resources/Metallica_-_One_cover.jpg'));
INSERT INTO song(name, year, genre_id, user_id, album_cover)
VALUES ('Five', 1973, 4, 2, LOAD_FILE('/home/tijanajanjic/Documents/PMF/8. semestar/PRIS/music-max/backend/src/main/resources/Metallica_-_One_cover.jpg'));
INSERT INTO song(name, year, genre_id, user_id, album_cover)
VALUES ('Six', 1973, 4, 2, LOAD_FILE('/home/tijanajanjic/Documents/PMF/8. semestar/PRIS/music-max/backend/src/main/resources/Metallica_-_One_cover.jpg'));
INSERT INTO song(name, year, genre_id, user_id, album_cover)
VALUES ('Seven', 1973, 4, 2, LOAD_FILE('/home/tijanajanjic/Documents/PMF/8. semestar/PRIS/music-max/backend/src/main/resources/Metallica_-_One_cover.jpg'));



INSERT INTO song_singers(song_id, singers_id) VALUES (10,1);
INSERT INTO song_singers(song_id, singers_id) VALUES (11,1);
INSERT INTO song_singers(song_id, singers_id) VALUES (12,1);
INSERT INTO song_singers(song_id, singers_id) VALUES (13,1);
INSERT INTO song_singers(song_id, singers_id) VALUES (14,1);
INSERT INTO song_singers(song_id, singers_id) VALUES (15,1);
INSERT INTO song_singers(song_id, singers_id) VALUES (16,1);