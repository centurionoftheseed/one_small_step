using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace ONE_SMALL_STEP.Core.Domain
{
    public class Message
    {
        public int MessageID { get; set; }
        public int MessageTypeID { get; set; }
        public string MessageDescription { get; set; }
        public MessageType MessageType { get; set; }
        public DateTime CreatedDate { get; set; }
        public int DummyCol { get; set; }
        public virtual ICollection<PersonMessage> PersonMessages { get; set; }
    
        
    }
}