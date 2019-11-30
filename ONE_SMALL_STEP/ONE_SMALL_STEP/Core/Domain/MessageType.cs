using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ONE_SMALL_STEP.Core.Domain
{
    public class MessageType
    {
        public int MessageTypeID { get; set; }
        public string MessageTypeName { get; set; }
        public DateTime CreatedDate { get; set; }

        public virtual ICollection<Message> Message { get; set; }

    }
}