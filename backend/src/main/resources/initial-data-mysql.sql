INSERT INTO role (id, name) VALUES (1, 'guest');
INSERT INTO role (id, name) VALUES (2, 'admin');

INSERT INTO user(id, email, password, role_id) VALUES (1,'pam@mail.com', '0123456', 1);
INSERT INTO user(id, email, password, role_id) VALUES (2, 'pera@mail.com', '0123456', 1);

INSERT INTO singer(id, stage_name) VALUES (1,'Metallica');
INSERT INTO singer(id, stage_name) VALUES (2,'Rihanna');
INSERT INTO singer(id, stage_name) VALUES (3,'Lady Gaga');
INSERT INTO singer(id, stage_name) VALUES (4,'Led Zeppelin');
INSERT INTO singer(id, stage_name) VALUES (5,'2Pac');

INSERT INTO genre(id, name) VALUES (1, 'Rock');
INSERT INTO genre(id, name) VALUES (2, 'Pop');
INSERT INTO genre(id, name) VALUES (3, 'Rap');
INSERT INTO genre(id, name) VALUES (4, 'Metal');

INSERT INTO song(id, name, year, genre_id, user_id, album_cover)
VALUES (1,'One', 1973, 4, 2, LOAD_FILE('/home/tijanajanjic/Documents/PMF/8. semestar/PRIS/music-max/backend/src/main/resources/metallica.jpg'));
INSERT INTO song(id, name, year, genre_id, user_id, album_cover)
VALUES (2, 'Unforgiven II', 1973, 4, 2, LOAD_FILE('/home/tijanajanjic/Documents/PMF/8. semestar/PRIS/music-max/backend/src/main/resources/metallica.jpg'));
INSERT INTO song(id, name, year, genre_id, user_id, album_cover)
VALUES (3, 'Umbrella', 2008, 2, 1, LOAD_FILE('/home/tijanajanjic/Documents/PMF/8. semestar/PRIS/music-max/backend/src/main/resources/rihanna.png'));
INSERT INTO song(id, name, year, genre_id, user_id, album_cover)
VALUES (4, 'Poker Face', 2010, 2, 2, LOAD_FILE('/home/tijanajanjic/Documents/PMF/8. semestar/PRIS/music-max/backend/src/main/resources/lady-gaga.png'));
INSERT INTO song(id, name, year, genre_id, user_id, album_cover)
VALUES (5,'Artpop', 2020, 2, 2, LOAD_FILE('/home/tijanajanjic/Documents/PMF/8. semestar/PRIS/music-max/backend/src/main/resources/lady-gaga.png'));
INSERT INTO song(id, name, year, genre_id, user_id, album_cover)
VALUES (6, 'Telephone', 2005, 2, 2, LOAD_FILE('/home/tijanajanjic/Documents/PMF/8. semestar/PRIS/music-max/backend/src/main/resources/lady-gaga.png'));
INSERT INTO song(id, name, year, genre_id, user_id, album_cover)
VALUES (7, 'Stairway to Heaven', 1970, 1, 2, LOAD_FILE('/home/tijanajanjic/Documents/PMF/8. semestar/PRIS/music-max/backend/src/main/resources/led-zeppelin.png'));
INSERT INTO song(id, name, year, genre_id, user_id, album_cover)
VALUES (8, 'Kashmir', 1970, 1, 2, LOAD_FILE('/home/tijanajanjic/Documents/PMF/8. semestar/PRIS/music-max/backend/src/main/resources/led-zeppelin.png'));

INSERT INTO song_singers(song_id, singers_id) VALUES (1,1);
INSERT INTO song_singers(song_id, singers_id) VALUES (2,1);
INSERT INTO song_singers(song_id, singers_id) VALUES (3,2);
INSERT INTO song_singers(song_id, singers_id) VALUES (4,3);
INSERT INTO song_singers(song_id, singers_id) VALUES (5,3);
INSERT INTO song_singers(song_id, singers_id) VALUES (6,3);
INSERT INTO song_singers(song_id, singers_id) VALUES (7,4);
INSERT INTO song_singers(song_id, singers_id) VALUES (8,4);

INSERT INTO topic(id, name) VALUES (1,'New fest in Novi Sad');
INSERT INTO topic(id, name) VALUES (2, 'New Nightwish song');
INSERT INTO topic(id, name) VALUES (3, 'The best rock band of all times');

INSERT INTO post(comment, topic_id, user_id) VALUES ('Wow', 1, 1);
INSERT INTO post(comment, topic_id, user_id) VALUES ('Can\'t wait!', 1, 1);
INSERT INTO post(comment, topic_id, user_id) VALUES ('Like it!', 2, 1);

INSERT INTO author(id, stage_name) VALUES (1, 'Robert Plant');
INSERT INTO author(id, stage_name) VALUES (2, 'Kanye West');

INSERT INTO song_authors(song_id, authors_id) VALUES (7, 1);
INSERT INTO song_authors(song_id, authors_id) VALUES (8, 1);

insert into rate(song_id, user_id, rate) values (1, 1, 10);
insert into rate(song_id, user_id, rate) values (2, 1, 9);
insert into rate(song_id, user_id, rate) values (2, 1, 8);
insert into rate(song_id, user_id, rate) values (3, 1, 9);