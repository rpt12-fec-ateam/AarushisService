DROP DATABASE IF EXISTS fec;

CREATE DATABASE fec;

USE fec;

CREATE TABLE items (
  id int NOT NULL AUTO_INCREMENT,
);


CREATE TABLE reviews (
  id int NOT NULL AUTO_INCREMENT,
  item_id int NOT NULL, 
  date date,
  header VARCHAR(20),
  userFirstName VARCHAR(20),
  userLastInitial VARCHAR(1),
  review VARCHAR(500),
  tips VARCHAR(200),
  stars int,
  PRIMARY KEY (ID),
  FOREIGN KEY (item_id)
     REFERENCES items(id)
);