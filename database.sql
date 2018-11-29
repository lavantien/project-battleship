create database test;
use test;

CREATE TABLE user (
	user_id		INT AUTO_INCREMENT,
    active		INT NOT NULL,
    email		VARCHAR(100) NOT NULL,
    last_name	VARCHAR(100) NOT NULL,
    name		VARCHAR(100) NOT NULL,
    password	VARCHAR(100) NOT NULL,
    PRIMARY KEY (user_id)
);

CREATE TABLE role (
	role_id		INT AUTO_INCREMENT,
    role		VARCHAR(100) NOT NULL,
    PRIMARY KEY (role_id)
);

CREATE TABLE user_role (
	user_id		INT,
    role_id		INT,
    FOREIGN KEY (user_id) REFERENCES user (user_id) ON DELETE RESTRICT ON UPDATE CASCADE,
    FOREIGN KEY (role_id) REFERENCES role (role_id) ON DELETE RESTRICT ON UPDATE CASCADE,
    PRIMARY KEY (user_id, role_id)
);

insert into user (active, email, last_name, name, password) values (1, 'admin@gmail.com', 'admin', 'root', '12345678');
set @user_id = LAST_INSERT_ID();
insert into role (role) values ('ADMIN');
set @role_id = LAST_INSERT_ID();
insert into user_role (user_id, role_id) values (@user_id, @role_id);

select * from user;
select * from role;
select * from user_role;
