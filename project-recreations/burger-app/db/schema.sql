DROP DATABASE IF EXISTS burger_city_db;

CREATE DATABASE burger_city_db;

USE burger_city_db;

CREATE TABLE burgers (
    id int NOT NULL AUTO_INCREMENT,
    burger varchar(255) NOT NULL,
    devoured BOOLEAN default false,
    createdAt TIMESTAMP NOT NULL default CURRENT_TIMESTAMP,
    PRIMARY KEY (id)
);