sap.ui.define(["sap/ui/core/mvc/Controller", "sap/ui/core/routing/History"], 
		         function(Controller, History) {
	                        "use strict";
	                        return Controller.extend("sns.basis.nav1.controller.BaseController", {
	                        	getRouter: function() {
	                        		return sap.ui.core.UIComponent.getRouterFor(this);
	                        	},
	                        	onNavBack: function(oEvent) {
	                        		debugger;
	                        		var oHistory, sPreviousHash;
	                        		oHistory=History.getInstance();
	                        		sPreviousHash=oHistory.getPreviousHash();
	                        		if (sPreviousHash !== undefined) {
	                        			window.history.go(-1);
	                        		} else {
	                        			this.getRouter().navTo("appHome", {}, true /*no history*/); // the hash is replaced
	                        			// this.getRouter().getTargets().display("home");
	                        		}
	                        	}
	                        });
	
                 }
);