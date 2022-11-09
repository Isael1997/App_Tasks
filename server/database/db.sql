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
);

ALTER TABLE users ADD COLUMN roles varchar(30);

CREATE TABLE roles(
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    name varchar(50) NOT NULL,
    users_id int,
    constraint FK_roles_user_id FOREIGN KEY (users_id) REFERENCES users(id) 
);




