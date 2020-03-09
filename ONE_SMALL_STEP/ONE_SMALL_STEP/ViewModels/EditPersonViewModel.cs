﻿using ONE_SMALL_STEP.Core.Domain;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace ONE_SMALL_STEP.ViewModels
{
    public class EditPersonViewModel
    {
        [HiddenInput(DisplayValue = false)]  
        public int PersonID { get; set; }
        //public int PersonTypeID { get; set;}

        public int PersonTypeID { get; set; }
        public int SourceID { get; set; }
        [Display(Name = "Contact Type")]
        public IEnumerable<PersonType> PersonTypes { get; set; }

        [Display(Name = "First Name")]
        public string FirstName { get; set; }
        [Display(Name = "Last Name")]
        public string LastName { get; set; }
        public string EmailAddress { get; set; }
        public string Screenshot { get; set; }
        [System.ComponentModel.DefaultValue(typeof(DateTime), "")]
        public DateTime CreateDate { get; set; }
    }
}