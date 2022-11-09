-- table tasks
CREATE TABLE tasks (
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(200) NOT NULL,
    description VARCHAR(300),
    developing BOOLEAN not null DEFAULT 0,
    done BOOLEAN NOT NULL DEFAULT 0,
    createAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE users(
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(50),
    lastname VARCHAR(100),
    email VARCHAR(100),
    username VARCHAR(50) not null,
    password VARCHAR(50) not null
)

CREATE TABLE roles(
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    category varchar(50) NOT NULL
)




