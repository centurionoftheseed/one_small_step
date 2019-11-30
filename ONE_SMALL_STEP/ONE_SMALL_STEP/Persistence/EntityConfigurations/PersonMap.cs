using ONE_SMALL_STEP.Core.Domain;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Data.Entity.ModelConfiguration;
using System.Data.Entity.ModelConfiguration.Conventions;
using System.Linq;
using System.Web;


namespace ONE_SMALL_STEP.Persistence.EntityConfigurations
{
    public class PersonMap : EntityTypeConfiguration<Person>
    {


        //evening  My 2.00am , that wwill your 3.30pmm 
        public PersonMap()
        {
            HasRequired(one => one.PersonType)
                .WithMany(one => one.Person)
                .HasForeignKey(one => one.PersonTypeID);

            Property(one => one.PersonTypeID)
                .HasColumnName("PersonTypeID");

            Property(one => one.EmailAddress)
               .HasMaxLength(50)
               .IsRequired()
               .IsUnicode(false)
               .HasColumnName("EmailAddress");

            Property(one => one.FirstName).HasMaxLength(30)
                .HasColumnName("FirstName")
                .IsRequired().IsUnicode(false);


            Property(one => one.LastName)
                .HasColumnName("LastName")
                .HasMaxLength(30).IsRequired()
                .IsUnicode(false);

            Property(one => one.Screenshot)
                .HasMaxLength(50)
                .IsRequired()
                .IsUnicode(false);

            Property(one => one.CreatedDate)
                .HasColumnName("CreatedDate");
                 
                //.HasDefaultValueSql("getdate()");

            //Property(one => one.TestName1)
            //    .HasColumnName("TestName1");

            //HasMany<Message>(one => one.Message)
            //    .WithMany(one => one.Person)
            //    .Map(pm =>
            //        {
            //            pm.MapLeftKey("PersonID");
            //            pm.MapRightKey("MessageID");
            //            pm.ToTable("PersonMessage");
            //        });

        }


    }






}


