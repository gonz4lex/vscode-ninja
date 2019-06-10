BEGIN TRY

SELECT * FROM MyTable

END TRY
BEGIN CATCH

THROW 51000, 'The record does not exist.', 1;

END CATCH;
