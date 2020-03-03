namespace ONE_SMALL_STEP.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class moredefaultdatesthatweremissing : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.MessageType", "DateUpdated", c => c.DateTime(nullable: false));
            AddColumn("dbo.PersonMessage", "DateCreated", c => c.DateTime(nullable: false));
            AddColumn("dbo.PersonMessage", "DateUpdated", c => c.DateTime(nullable: false));
            AddColumn("dbo.Person", "DateUpdated", c => c.DateTime(nullable: false));
            AddColumn("dbo.Source", "DateCreated", c => c.DateTime(nullable: false));
            AddColumn("dbo.Source", "DateUpdated", c => c.DateTime(nullable: false));
            AddColumn("dbo.SourceType", "DateCreated", c => c.DateTime(nullable: false));
            AddColumn("dbo.SourceType", "DateUpdated", c => c.DateTime(nullable: false));
            DropColumn("dbo.PersonMessage", "CreatedDAte");
        }
        
        public override void Down()
        {
            AddColumn("dbo.PersonMessage", "CreatedDAte", c => c.DateTime(nullable: false));
            DropColumn("dbo.SourceType", "DateUpdated");
            DropColumn("dbo.SourceType", "DateCreated");
            DropColumn("dbo.Source", "DateUpdated");
            DropColumn("dbo.Source", "DateCreated");
            DropColumn("dbo.Person", "DateUpdated");
            DropColumn("dbo.PersonMessage", "DateUpdated");
            DropColumn("dbo.PersonMessage", "DateCreated");
            DropColumn("dbo.MessageType", "DateUpdated");
        }
    }
}
