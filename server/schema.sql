CREATE DATABASE chat;

USE chat;

CREATE TABLE messages (
  user varchar(25),
  room varchar(25),
  message varchar(255)
);

/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

