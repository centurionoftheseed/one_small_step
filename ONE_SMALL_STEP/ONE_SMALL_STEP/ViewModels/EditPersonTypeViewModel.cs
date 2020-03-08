using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace ONE_SMALL_STEP.ViewModels
{
    public class EditPersonTypeViewModel
    {
        [HiddenInput(DisplayValue = false)]
        public int PersonTypeID { get; set; }

        [Display(Name = "Contact Type")]
        public string PersonTypeName { get; set; }

        [System.ComponentModel.DefaultValue(typeof(DateTime), "")]
        public DateTime CreateDate { get; set; }
    }
}