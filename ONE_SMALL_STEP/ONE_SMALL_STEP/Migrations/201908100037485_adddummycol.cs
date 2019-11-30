namespace ONE_SMALL_STEP.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class adddummycol : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Message",
                c => new
                {
                    MessageID = c.Int(nullable: false, identity: true),
                    MessageTypeID = c.Int(nullable: false),
                    MessageDescription = c.String(nullable: false, maxLength: 30, unicode: false),
                    CreatedDate = c.DateTime(nullable: false),
                    DummyCol = c.Int(nullable: false),
                })
                .PrimaryKey(t => t.MessageID)
                .ForeignKey("dbo.MessageType", t => t.MessageTypeID, cascadeDelete: true)
                .Index(t => t.MessageTypeID);

            CreateTable(
                "dbo.MessageType",
                c => new
                    {
                        MessageTypeID = c.Int(nullable: false, identity: true),
                        MessageType = c.String(nullable: false, maxLength: 30, unicode: false),
                        CreatedDate = c.DateTime(nullable: false),
                    })
                .PrimaryKey(t => t.MessageTypeID);
            
            CreateTable(
                "dbo.PersonMessage",
                c => new
                    {
                        PersonID = c.Int(nullable: false),
                        MessageID = c.Int(nullable: false),
                        CreatedDAte = c.DateTime(nullable: false),
                    })
                .PrimaryKey(t => new { t.PersonID, t.MessageID })
                .ForeignKey("dbo.Message", t => t.MessageID, cascadeDelete: true)
                .ForeignKey("dbo.Person", t => t.PersonID, cascadeDelete: true)
                .Index(t => t.PersonID)
                .Index(t => t.MessageID);

            CreateTable(
                "dbo.Person",
                c => new
                {
                    PersonID = c.Int(nullable: false, identity: true),
                    FirstName = c.String(nullable: false, maxLength: 30, unicode: false),
                    LastName = c.String(nullable: false, maxLength: 30, unicode: false),
                    EmailAddress = c.String(nullable: false, maxLength: 50, unicode: false),
                    Screenshot = c.String(nullable: false, maxLength: 50, unicode: false),
                    //CreatedDate = c.DateTime(nullable: false),
                    //CreatedDate = c.DateTime(defaultValueSql: "GETDATE()"),
                    PersonTypeID = c.Int(nullable: false),
                    })
                .PrimaryKey(t => t.PersonID)
                .ForeignKey("dbo.PersonType", t => t.PersonTypeID, cascadeDelete: true)
                .Index(t => t.PersonTypeID);
            
            CreateTable(
                "dbo.PersonType",
                c => new
                    {
                        PersonTypeID = c.Int(nullable: false, identity: true),
                        PersonTypeName = c.String(nullable: false, maxLength: 30, unicode: false),
                        CreatedDate = c.DateTime(nullable: false),
                        UpdatedDate = c.DateTime(nullable: false),
                    })
                .PrimaryKey(t => t.PersonTypeID);
            
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.Person", "PersonTypeID", "dbo.PersonType");
            DropForeignKey("dbo.PersonMessage", "PersonID", "dbo.Person");
            DropForeignKey("dbo.PersonMessage", "MessageID", "dbo.Message");
            DropForeignKey("dbo.Message", "MessageTypeID", "dbo.MessageType");
            DropIndex("dbo.Person", new[] { "PersonTypeID" });
            DropIndex("dbo.PersonMessage", new[] { "MessageID" });
            DropIndex("dbo.PersonMessage", new[] { "PersonID" });
            DropIndex("dbo.Message", new[] { "MessageTypeID" });
            DropTable("dbo.PersonType");
            DropTable("dbo.Person");
            DropTable("dbo.PersonMessage");
            DropTable("dbo.MessageType");
            DropTable("dbo.Message");
        }
    }
}
