-- ================================================
-- Template generated from Template Explorer using:
-- Create Procedure (New Menu).SQL
--
-- Use the Specify Values for Template Parameters 
-- command (Ctrl-Shift-M) to fill in the parameter 
-- values below.
--
-- This block of comments will not be included in
-- the definition of the procedure.
-- ================================================
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-- =============================================
-- Author:		<Author,,Name>
-- Create date: <Create Date,,>
-- Description:	<Description,,>
-- =============================================
CREATE PROCEDURE uspProdColors
	-- Add the parameters for the stored procedure here
	@PRODID INT
AS
BEGIN
	-- SET NOCOUNT ON added to prevent extra result sets from
	-- interfering with SELECT statements.
	SET NOCOUNT ON;

    -- Insert statements for procedure here
	SELECT oa.AttributeID,oa.AttributesValue, oa.TypeID FROM ProductAttributes pa JOIN ObjectAttribute oa
	ON PA.ColorID = oa.AttributeID
	WHERE ProductId = @PRODID

	--SELECT AttributesValue FROM ProductAttributes pa JOIN ObjectAttribute oa
	--ON PA.SizeID = oa.AttributeID
	--WHERE ProductId = @PRODID
END
GO

exec uspProdColors 1

SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-- =============================================
-- Author:		<Author,,Name>
-- Create date: <Create Date,,>
-- Description:	<Description,,>
-- =============================================
ALTER PROCEDURE uspProdSize
	-- Add the parameters for the stored procedure here
	@PRODID INT
AS
BEGIN
	-- SET NOCOUNT ON added to prevent extra result sets from
	-- interfering with SELECT statements.
	SET NOCOUNT ON;

    -- Insert statements for procedure here

	SELECT oa.AttributeID,oa.AttributesValue, oa.TypeID FROM ProductAttributes pa JOIN ObjectAttribute oa
	ON PA.SizeID = oa.AttributeID
	WHERE ProductId = @PRODID
END
GO

exec uspProdSize 1
