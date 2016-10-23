sap.ui.define(["sns/basis/nav1/controller/BaseController"], 
		          function(BaseController) {
	                    "use strict";
	                    return BaseController.extend("sns.basis.nav1.controller.employee.EmployeeList", {
	                    	onListItemPressed: function(oEvent) {
	                    		// debugger;
	                    		var oItem, oCtx;
	                    		oItem = oEvent.getSource();
	                    		oCtx= oItem.getBindingContext();
	                    		this.getRouter().navTo("employee", {
	                    			employeeId: oCtx.getProperty("EmployeeID")
	                    		});
	                    	}
	                    });
});