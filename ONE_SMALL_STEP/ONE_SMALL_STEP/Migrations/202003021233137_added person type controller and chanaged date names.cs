namespace ONE_SMALL_STEP.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class addedpersontypecontrollerandchanageddatenames : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.PersonType", "DateCreated", c => c.DateTime(nullable: false));
            AddColumn("dbo.PersonType", "DateUpdated", c => c.DateTime(nullable: false));
            DropColumn("dbo.PersonType", "CreatedDate");
            DropColumn("dbo.PersonType", "UpdatedDate");
        }
        
        public override void Down()
        {
            AddColumn("dbo.PersonType", "UpdatedDate", c => c.DateTime(nullable: false));
            AddColumn("dbo.PersonType", "CreatedDate", c => c.DateTime(nullable: false));
            DropColumn("dbo.PersonType", "DateUpdated");
            DropColumn("dbo.PersonType", "DateCreated");
        }
    }
}
