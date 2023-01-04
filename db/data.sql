DROP TABLE IF EXISTS locations;

CREATE TABLE locations (
  id SERIAL PRIMARY KEY,
  place_name VARCHAR(1000) NOT NULL,
  place_id VARCHAR(1000) NOT NULL
);

INSERT INTO locations (place_name, place_id) VALUES ( 'Ailn', 'Rathmouth');
INSERT INTO locations (place_name, place_id) VALUES ( 'Ailn', 'Rathmouth');
INSERT INTO locations (place_name, place_id) VALUES ( 'Ailn', 'Rathmouth');
INSERT INTO locations (place_name, place_id) VALUES ( 'Ailn', 'Rathmouth');
INSERT INTO locations (place_name, place_id) VALUES ( 'Ailn', 'Rathmouth');

