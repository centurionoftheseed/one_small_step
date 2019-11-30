using ONE_SMALL_STEP.Core.Domain;
using System;
using System.Collections.Generic;
using System.Data.Entity.ModelConfiguration;
using System.Linq;
using System.Web;

namespace ONE_SMALL_STEP.Persistence.EntityConfigurations
{
    public class MessageMap : EntityTypeConfiguration<Message>
    {
        public MessageMap()
        {

            HasRequired(one => one.MessageType)
           .WithMany(one => one.Message)
           .HasForeignKey(one => one.MessageTypeID);

            Property(one => one.MessageDescription)
            .HasMaxLength(30)
            .IsRequired()
            .IsUnicode(false);
        }
    }
}