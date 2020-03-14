using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace ONE_SMALL_STEP.ViewModels
{
    public class SourceTypeViewModel
    {
        [HiddenInput(DisplayValue = false)]
        public int SourceTypeID { get; set; }
        public string SourceTypeName { get; set; }
    }
}