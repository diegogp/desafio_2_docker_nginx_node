use nodedb;

create table people(id int not null auto_increment, name varchar(255), primary key(id));

ALTER USER 'root' IDENTIFIED WITH mysql_native_password BY 'root'; 

flush privileges;