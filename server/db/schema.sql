/*CREATE DATABASE wya_db;
USE wya_db;

CREATE TABLE users
(
	id int NOT NULL AUTO_INCREMENT,
	first_name varchar(255) NOT NULL,
    last_name varchar(255) NOT NULL,
	driver BOOLEAN DEFAULT false,
    email varchar(255) NOT NULL,
    emergency_contact_name varchar(255) NOT NULL,
    emergency_contact_number varchar(255) NOT NULL,
    studentId BIGINT NOT NULL,
	PRIMARY KEY (id)
);*/

-- Drops the emergency_central if it exists currently --
DROP DATABASE IF EXISTS emergency_central;
-- Creates the "emergency_central" database --
CREATE DATABASE emergency_central;
