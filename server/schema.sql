DROP DATABASE IF EXISTS chat;
CREATE DATABASE chat;

USE chat;

CREATE TABLE users (
  id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
  user varchar(25)
);

CREATE TABLE rooms (
  id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
  room varchar(25)
);

CREATE TABLE messages (
  userId int NOT NULL,
  roomId int NOT NULL,
  message varchar(255),
  postedAt date
);

/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

