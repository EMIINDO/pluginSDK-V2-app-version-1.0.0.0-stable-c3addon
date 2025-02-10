"use strict";
{
    // Porting BY EMI INDO with c3addon-ide-plus

    globalThis.C3.Plugins.EMI_INDO_AppVersion.Instance = class AppVersionInstance extends globalThis.ISDKInstanceBase {
        constructor() {
            super();

            const properties = this._getInitProperties();


            if (properties) { }


            this.EMI_INDO = globalThis.C3.Plugins.EMI_INDO_AppVersion.Cnds;

            if (typeof cordova == 'undefined') {
                return;
            }

            this.eventResponse = "";

            const self = this;

            this.config = cordova.getAppVersion;


            const getVersionNumber = () => {
                this.config.getVersionNumber(function (version) {
                    console.log(version)
                    self.eventResponse = (version);
                    self._trigger(self.EMI_INDO.Ongetversionnumber);
                });

            };


            const getAppName = () => {
                this.config.getAppName(function (success) {
                    console.log(success)
                    self.eventResponse = (success)
                    self._trigger(self.EMI_INDO.Ongetappname);
                });

            };


            const getPackageName = () => {
                this.config.getPackageName(function (success) {
                    console.log(success)
                    self.eventResponse = (success);
                    self._trigger(self.EMI_INDO.Ongetpackagename);
                });

            };



            const getVersionCode = () => {
                this.config.getVersionCode(function (success) {
                    console.log(success)
                    self.eventResponse = (success);
                    self._trigger(self.EMI_INDO.Ongetversioncode);
                });

            };



            this.getVersionNumber = getVersionNumber;
            this.getAppName = getAppName;
            this.getPackageName = getPackageName;
            this.getVersionCode = getVersionCode;




        }

        _release() {
            super._release();
        }

        _saveToJson() {
            return {
                // data to be saved for savegames
            };
        }

        _loadFromJson(o) {
            // load state for savegames
        }

    };
}