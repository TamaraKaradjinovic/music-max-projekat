INSERT INTO role (name) VALUES ('guest');
INSERT INTO user(email, password, role_id) VALUES ('pam@mail.com', '0123456', 1);


INSERT INTO topic(name) VALUES ('New Metallica album');
INSERT INTO topic(name) VALUES ('New Antrax song');

INSERT INTO post(comment, topic_id, user_id) VALUES ('lalallal', 1, 1);
INSERT INTO post(comment, topic_id, user_id) VALUES ('rararra', 1, 1);
INSERT INTO post(comment, topic_id, user_id) VALUES ('nanannan', 1, 1);
