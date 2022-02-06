CREATE DEFINER=`root`@`localhost` PROCEDURE `miPrimerNombreAdd`(
	IN _id INT,
    IN _created DATETIME,
    IN _descrip VARCHAR(200)
)
BEGIN
	IF _id = 0 THEN
		INSERT INTO TResource ( created, descrip )
		VALUES (_created, _descrip );
        
		SET _id = LAST_INSERT_ID();
	ELSE
		UPDATE TResource
        SET
			created = _created,
            descrip = _descrip
            
            WHERE id = _id;
	END IF;
    
    SELECT _id AS id;
END