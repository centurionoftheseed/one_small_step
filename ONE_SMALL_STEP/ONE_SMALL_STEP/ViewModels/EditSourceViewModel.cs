using ONE_SMALL_STEP.Core.Domain;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace ONE_SMALL_STEP.ViewModels
{
    public class EditSourceViewModel
    {
        [HiddenInput(DisplayValue = false)]
        public int MessageID { get; set; }

        public string MessageName { get; set; }

        public int SourceTypeID { get; set; }
        [Display(Name = "Source Type")]
        public IEnumerable<SourceType> MessageTypes { get; set; }

        [System.ComponentModel.DefaultValue(typeof(DateTime), "")]
        public DateTime DateCreated { get; set; }
        [System.ComponentModel.DefaultValue(typeof(DateTime), "")]
        public DateTime DateUpdated { get; set; }
    }
}