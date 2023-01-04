DROP TABLE IF EXISTS locations;

CREATE TABLE locations (
  id SERIAL PRIMARY KEY,
  place_name VARCHAR(1000) NOT NULL,
  place_id VARCHAR(1000) NOT NULL
);

INSERT INTO locations (place_name, place_id) VALUES ( 'Hut-Bazaar', 'ChIJ19PMX_-5EmsRJkKCh-3H3ao');
INSERT INTO locations (place_name, place_id) VALUES ( 'FUSKA HOUSE', 'ChIJvYNp3wG6EmsRH_t4QvmjHfQ');
INSERT INTO locations (place_name, place_id) VALUES ( 'Chubby Buns Burgers', 'ChIJU4ZV1y6_EmsRwlxJc30lhEU');
INSERT INTO locations (place_name, place_id) VALUES ( 'Dhanshiri Restora', 'ChIJCQHRozW7EmsR7BZyUhmZj5Y');
INSERT INTO locations (place_name, place_id) VALUES ( 'Mataam Al Mandi', 'ChIJ6Z6MV067EmsRBfT1Tr5KUP8');
INSERT INTO locations (place_name, place_id) VALUES ( 'Jasmin 1', 'ChIJtUXycvu7EmsRrqmduNmV2l4');
INSERT INTO locations (place_name, place_id) VALUES ( 'Charcoal Kingdom', 'ChIJR6VxWwC6EmsRpRvUa5PlFfM');
INSERT INTO locations (place_name, place_id) VALUES ( "
It's Time for Thai", 'ChIJ469K1jOwEmsRLquXGd8yfio');
INSERT INTO locations (place_name, place_id) VALUES ( 'Viet Delish', 'ChIJn4IBJKi7EmsR0Rf29PIQojo');
INSERT INTO locations (place_name, place_id) VALUES ( 'Student Biryani Auburn', 'ChIJPweWULC8EmsRgnFTFqDWRoA');

