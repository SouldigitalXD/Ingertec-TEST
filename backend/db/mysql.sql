

CREATE TABLE TResource_type(
	idResourceType INT(11) NOT NULL AUTO_INCREMENT,
    created datetime,
    descrip varchar(200),
    PRIMARY KEY(idResourceType)
);

CREATE TABLE TResource(
	id INT(11) NOT NULL AUTO_INCREMENT,
    created datetime,
    descrip varchar(200),
    PRIMARY KEY(id),
    FOREIGN KEY (id) REFERENCES TResource_type(idResourceType)
);

SELECT COUNT(descrip) FROM TResource;

INSERT INTO TResource values
( 6, '2022/02/02', 'Registros Finalizados');

