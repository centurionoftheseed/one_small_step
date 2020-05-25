using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Optimization;

namespace ONE_SMALL_STEP
{
    public class DxBundleConfig
    {
        public static void RegisterBundles(BundleCollection bundles)
        {
            var scriptBundle = new ScriptBundle("~/scripts/dx");
            var styleBundle = new StyleBundle("~/styles/dx");

            scriptBundle
            //.Include("~/node_modules/devextreme/dist/js/dx.all.js")
            //.Include("~/node_modules/devextreme/dist/js/vectormap-data/usa.js");
            .Include("~/Scripts/dx.all.js");
            //.Include("~/node_modules/devextreme/dist/js/vectormap-data/usa.js");
            styleBundle
                //.Include("~/node_modules/devextreme/dist/css/dx.common.css")
                //.Include("~/node_modules/devextreme/dist/css/dx.light.css")
                //.Include("~/Content/dx.custom.css");
                .Include("~/Content/dx.common.css")
                .Include("~/Content/dx.light.css");
            //.Include("~/Content/dx.custom.css");

            bundles.Add(scriptBundle);
            bundles.Add(styleBundle);

#if !DEBUG
            BundleTable.EnableOptimizations = true;
#endif
        }
    }
}