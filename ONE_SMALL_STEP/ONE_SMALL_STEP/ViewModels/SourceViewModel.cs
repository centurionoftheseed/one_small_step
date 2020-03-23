using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace ONE_SMALL_STEP.ViewModels
{
    public class SourceViewModel
    {

        [HiddenInput(DisplayValue = false)]
        public int SourceID { get; set; }
        public string SourceName { get; set; }
        //public int MessageTypeID { get; set; }

        [Display(Name = "Source Type")]
        //public PersonType PersonTypeName { get; set; }
        public string SourceType { get; set; }


        public DateTime DateCreated { get; set; }

        public DateTime DateUpdate { get; set; }

    }
}