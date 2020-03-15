using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ONE_SMALL_STEP.Core.Domain
{
    public class SourceType
    {
        public int SourceTypeID { get; set; }
        public string SourceTypeName { get; set; }

        public virtual ICollection<Source> Source { get; set; }

        private DateTime? _dateCreated = null;

        public DateTime DateCreated
        {
            get
            {
                return this._dateCreated.HasValue
                   ? this._dateCreated.Value
                   : DateTime.Now;
            }

            set { this._dateCreated = value; }
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
    }
}