"use strict";
{
    globalThis.C3.Plugins.EMI_INDO_AppVersion.Acts = {
        async Getversionnumber()
        {
            if (typeof cordova == 'undefined')
            {
                return;
            }
         
            await this.getVersionNumber();
        },

        async Getappname()
        {
            if (typeof cordova == 'undefined')
            {
                return;
            }
            await this.getAppName();
        },

        async Getpackagename()
        {
            if (typeof cordova == 'undefined')
            {
                return;
            }
            await this.getPackageName();
        },

        async Getversioncode()
        {
            if (typeof cordova == 'undefined')
            {
                return;
            }
            await this.getVersionCode();
        }
    };
}