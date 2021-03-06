USE [mindicators]
GO


SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[Group](
	[Id] [bigint] IDENTITY(1,1) NOT NULL,
	[Name] [nvarchar](100) NOT NULL,
	[GroupId] [bigint] NULL,
	CONSTRAINT [PK_Group] PRIMARY KEY CLUSTERED ([Id] ASC) 
	WITH (PAD_INDEX = OFF, 
		  STATISTICS_NORECOMPUTE = OFF, 
		  IGNORE_DUP_KEY = OFF, 
		  ALLOW_ROW_LOCKS = ON, 
		  ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]) ON [PRIMARY]

GO

SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[Indicator](
	[Id] [bigint] IDENTITY(1,1) NOT NULL,
	[Name] [nvarchar](100) NOT NULL,
	[Type] [nchar](1) NOT NULL,
	[Periodicity] [nchar](1) NOT NULL,
	[GroupId] [bigint] NOT NULL,
	CONSTRAINT [PK_Indicators] PRIMARY KEY CLUSTERED ([Id] ASC)
	WITH (PAD_INDEX = OFF, 
		  STATISTICS_NORECOMPUTE = OFF, 
		  IGNORE_DUP_KEY = OFF, 
		  ALLOW_ROW_LOCKS = ON, 
		  ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]) ON [PRIMARY]

GO

SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[User](
	[Id] [bigint] IDENTITY(1,1) NOT NULL,
	[FirstName] [nvarchar](100) NOT NULL,
	[LastName] [nvarchar](100) NOT NULL,
	[Username] [nvarchar](60) NOT NULL,
	[Password] [nvarchar](100) NOT NULL,
	CONSTRAINT [PK_User] PRIMARY KEY CLUSTERED ([Id] ASC)
	WITH (PAD_INDEX = OFF, 
	      STATISTICS_NORECOMPUTE = OFF, 
		  IGNORE_DUP_KEY = OFF, 
		  ALLOW_ROW_LOCKS = ON, 
		  ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]) ON [PRIMARY]

GO

SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Value](
	[Id] [bigint] IDENTITY(1,1) NOT NULL,
	[Date] [datetime] NOT NULL,
	[Value] [numeric](18, 4) NOT NULL,
	[IndicatorId] [bigint] NOT NULL,
	CONSTRAINT [PK_Value] PRIMARY KEY CLUSTERED ([Id] ASC)
	WITH (PAD_INDEX = OFF, 
	      STATISTICS_NORECOMPUTE = OFF, 
		  IGNORE_DUP_KEY = OFF, 
		  ALLOW_ROW_LOCKS = ON, 
		  ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]) ON [PRIMARY]

GO

ALTER TABLE [dbo].[Group]  WITH CHECK ADD  CONSTRAINT [FK_Group_Group] FOREIGN KEY([GroupId]) REFERENCES [dbo].[Group] ([Id])
GO

ALTER TABLE [dbo].[Group] CHECK CONSTRAINT [FK_Group_Group]
GO

ALTER TABLE [dbo].[Indicator]  WITH CHECK ADD  CONSTRAINT [FK_Indicator_Group] FOREIGN KEY([GroupId]) REFERENCES [dbo].[Group] ([Id])
GO

ALTER TABLE [dbo].[Indicator] CHECK CONSTRAINT [FK_Indicator_Group]
GO

ALTER TABLE [dbo].[Value]  WITH CHECK ADD  CONSTRAINT [FK_Values_Indicators] FOREIGN KEY([IndicatorId]) REFERENCES [dbo].[Indicator] ([Id])
GO

ALTER TABLE [dbo].[Value] CHECK CONSTRAINT [FK_Values_Indicators]
GO
