using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ONE_SMALL_STEP.Core.Domain
{
    public class PersonMessage
    {
        public int PersonID { get; set; }
        public virtual Message message { get; set; }
        public int MessageID { get; set; }
        public virtual Person person { get; set; }
        //public DateTime CreatedDAte { get; set; }
        private DateTime? _DateCreated = null;

        public DateTime DateCreated
        {
            get
            {
                return this._DateCreated.HasValue
                   ? this._DateCreated.Value
                   : DateTime.Now;
            }

            set { this._DateCreated = value; }
        }

        private DateTime? _dateUpdated = null;
        public DateTime DateUpdated

        {
            get
            {
                return this._dateUpdated.HasValue
                   ? this._dateUpdated.Value
                   : DateTime.Now;
            }

            set { this._dateUpdated = value; }
        }


        //public int PersonID { get; set; }


        //public ICollection<Person> Person { get; set; }
        //public ICollection<Message> Message { get; set; }
    }
}