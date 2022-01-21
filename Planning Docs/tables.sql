-- CREATE TABLE users(
--     id SERIAL PRIMARY KEY,
--     username VARCHAR(28) NOT NULL,
--     password VARCHAR(256) NOT NULL
--     );

-- CREATE TABLE playthroughs(
--     game_id SERIAL PRIMARY KEY,
--     user_id INT REFERENCES users(id),
--     game_date DATE,
--     knight_name VARCHAR(28),
--     score INT
--     );

--MOCK DATA BELOW--

-- INSERT INTO users (username, password)
-- VALUES('JoesRealBBQ', 'mypassword001'),
-- ('AZSquirrels', 'mypassword002'),
-- ('JakePeralta', 'mypassword003'),
-- ('VeronicaMars', 'mypassword004'),
-- ('PizWiz','mypassword005'),
-- ('AlexisBledel','mypassword006'),
-- ('LaurenGraham', 'mypassword007'),
-- ('JohnnyBGood', 'mypassword008'),
-- ('LoganMize', 'mypassword009'),
-- ('JOJORabbit','mypassword010');

-- INSERT INTO playthroughs (user_id, game_date, knight_name, score)
-- VALUES(1, DATE('2022-01-20'), 'HonorKnight007', 175),
-- (3, DATE('2022-01-20'), 'Lancelot', 50),
-- (8, DATE('2022-01-05'), 'Manfred the Dreamer', 67),
-- (1, DATE('2022-01-07'), 'Normand the Champion', 160),
-- (1, DATE('2022-01-06'), 'Aidam of the Shadows', 87),
-- (7, DATE('2022-01-17'), 'Lorelai', 20);