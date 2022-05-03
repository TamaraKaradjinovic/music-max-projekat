INSERT INTO role (name) VALUES ('guest');

INSERT INTO user(email, password, role_id) VALUES ('pam@mail.com', '0123456', 1);
INSERT INTO user(email, password, role_id) VALUES ('pera@mail.com', '0123456', 1);

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
INSERT INTO song(name, year, genre_id, user_id, album_cover)
VALUES ('Eight', 1973, 2, 2, LOAD_FILE('/home/tijanajanjic/Documents/PMF/8. semestar/PRIS/music-max/backend/src/main/resources/Metallica_-_One_cover.jpg'));

INSERT INTO song_singers(song_id, singers_id) VALUES (10,1);
INSERT INTO song_singers(song_id, singers_id) VALUES (11,1);
INSERT INTO song_singers(song_id, singers_id) VALUES (5,1);
INSERT INTO song_singers(song_id, singers_id) VALUES (6,1);
INSERT INTO song_singers(song_id, singers_id) VALUES (7,1);
INSERT INTO song_singers(song_id, singers_id) VALUES (8,1);
INSERT INTO song_singers(song_id, singers_id) VALUES (9,1);

INSERT INTO topic(name) VALUES ('New Metallica album');
INSERT INTO topic(name) VALUES ('New Antrax song');

INSERT INTO post(comment, topic_id, user_id) VALUES ('lalallal', 1, 1);
INSERT INTO post(comment, topic_id, user_id) VALUES ('rararra', 1, 1);
INSERT INTO post(comment, topic_id, user_id) VALUES ('nanannan', 1, 1);

