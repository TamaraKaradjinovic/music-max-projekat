INSERT INTO role (id, name) VALUES (1, 'guest');
INSERT INTO role (id, name) VALUES (2, 'admin');

INSERT INTO user(id, email, password, role_id) VALUES (1,'pam@mail.com', '0123456', 1);
INSERT INTO user(id, email, password, role_id) VALUES (2, 'pera@mail.com', '0123456', 1);
INSERT INTO user(id, email, password, role_id) VALUES (3, 'mina@mail.com', '0123456', 2);

INSERT INTO account(gender, name, phone_number, surname, user_id, birthdate)
VALUES (1, 'Pam', '0664445555', 'Smith', 1, '1989-02-04' );

INSERT INTO account(gender, name, phone_number, surname, user_id, birthdate)
VALUES (0, 'Pera', '0664446666', 'Peric', 2 , '1999-02-02');

INSERT INTO singer(id, stage_name) VALUES (1,'Metallica');
INSERT INTO singer(id, stage_name) VALUES (2,'Rihanna');
INSERT INTO singer(id, stage_name) VALUES (3,'Lady Gaga');
INSERT INTO singer(id, stage_name) VALUES (4,'Led Zeppelin');
INSERT INTO singer(id, stage_name) VALUES (5,'2Pac');

INSERT INTO genre(id, name) VALUES (1, 'Rock');
INSERT INTO genre(id, name) VALUES (2, 'Pop');
INSERT INTO genre(id, name) VALUES (3, 'Rap');
INSERT INTO genre(id, name) VALUES (4, 'Metal');

insert into file(id, file) VALUES (1, LOAD_FILE('/home/tijanajanjic/Documents/PMF/8. semestar/PRIS/music-max/backend/src/main/resources/metallica.jpg'));
insert into file(id, file) VALUES (2, LOAD_FILE('/home/tijanajanjic/Documents/PMF/8. semestar/PRIS/music-max/backend/src/main/resources/rihanna.png'));
insert into file(id, file) VALUES (3, LOAD_FILE('/home/tijanajanjic/Documents/PMF/8. semestar/PRIS/music-max/backend/src/main/resources/lady-gaga.png'));
insert into file(id, file) VALUES (4, LOAD_FILE('/home/tijanajanjic/Documents/PMF/8. semestar/PRIS/music-max/backend/src/main/resources/led-zeppelin.png'));
insert into file(id, file) VALUES (5, LOAD_FILE('/home/tijanajanjic/Music/2Pac_-_Changes_ft_Talent_talkglitz.tv.mp3'));
insert into file(id, file) VALUES (6, LOAD_FILE('/home/tijanajanjic/Downloads/changes.mp4'));

INSERT INTO song(id, name, year, genre_id, user_id, album_cover_id)
VALUES (1,'One', 1973, 4, 2, 1);
INSERT INTO song(id, name, year, genre_id, user_id, album_cover_id)
VALUES (2, 'Unforgiven II', 1973, 4, 2, 1);
INSERT INTO song(id, name, year, genre_id, user_id, album_cover_id)
VALUES (3, 'Umbrella', 2008, 2, 1, 2);
INSERT INTO song(id, name, year, genre_id, user_id, album_cover_id)
VALUES (4, 'Poker Face', 2010, 2, 2, 3);
INSERT INTO song(id, name, year, genre_id, user_id, album_cover_id)
VALUES (5,'Artpop', 2020, 2, 2, 3);
INSERT INTO song(id, name, year, genre_id, user_id, album_cover_id)
VALUES (6, 'Telephone', 2005, 2, 2, 3);
INSERT INTO song(id, name, year, genre_id, user_id, album_cover_id)
VALUES (7, 'Stairway to Heaven', 1970, 1, 2, 4);
INSERT INTO song(id, name, year, genre_id, user_id, album_cover_id)
VALUES (8, 'Kashmir', 1970, 1, 2, 4);

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

insert into festival(id, name, start_date, end_date, description, cover_photo_id)
VALUES (1, 'exit1', '1989-02-04', '1989-02-06','neki oopiis', 1);
insert into festival(id, name, start_date, end_date, description, cover_photo_id)
VALUES (2, 'exit2', '1989-02-04', '1989-02-06','neki oopiis', 2);
insert into festival(id, name, start_date, end_date, description, cover_photo_id)
VALUES (3, 'exit20', '2022-10-02', '2022-10-12','neki oopiis', 3);

insert into news(id, content, title) values(1, 'news cooooontenttttttt', 'blog post');
insert into news_photos(news_id, photos_id) values (1,1);
insert into news_photos(news_id, photos_id) values (1,2);

insert into news(id, content, title, video_id, audio_id) values(2, 'Ukraine’s Kalush Orchestra won the Eurovision Song Contest this year with their entry, “Stefania.” ', 'Eurovision 2022 Winners Auction Their Trophy to Support Ukraine’s Military',6,5);
insert into news_photos(news_id, photos_id) values (2,3);
insert into news_photos(news_id, photos_id) values (2,2);


insert into news_photos(news_id, photos_id) values (3,2);