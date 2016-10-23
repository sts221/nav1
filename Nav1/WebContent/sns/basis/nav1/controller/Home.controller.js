sap.ui.define(["sns/basis/nav1/controller/BaseController"], function(BaseController) {
	            "use strict";
	            return BaseController.extend("sns.basis.nav1.controller.Home", {
	            	onInit: function() {
	            		
	            	},
	            	
	            	onDisplayNotFound: function(oEvent) {
	            		// display the NotFound target without changing the URL hash
	            		debugger;
	            		this.getRouter().getTargets().display("notFound", {fromTarget: "home"});
	            	},
	            	onNavToEmployees: function(oEvent) {
	            		this.getRouter().navTo("employeeList");
	            	},
	            	onNavToEmployeeOverview: function(oEvent) {
	            		this.getRouter().navTo("employeeOverview");
	            	}
	            	
	            });
});