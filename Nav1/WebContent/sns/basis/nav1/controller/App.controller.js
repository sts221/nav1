sap.ui.define(["sns/basis/nav1/controller/BaseController"], function (BaseController){
	"use strict";
	return BaseController.extend("sns.basis.nav1.controller.App", {
		onInit: function() {
			var oRouter = this.getRouter();
			oRouter.attachBypassed( function (oEvent) {
				debugger;
				var sHash = oEvent.getParameter("hash");
				// send logging data for analysis
				jQuery.sap.log.info("Sorry but the hash '" + sHash + "' is invalid", "The resource was not found.");
			});
			oRouter.attachRouteMatched(function (oEvent) {
				var sRouteName = oEvent.getParameter("name");
				// send usage statistics to back end
				jQuery.sap.log.info("User accessed route " + sRouteName + ", timestamp = " + new Date().getTime());
			}); 
		}
	});
});