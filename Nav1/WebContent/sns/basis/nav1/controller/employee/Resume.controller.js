// The complete content of the tabs is loaded once no matter which tab is displayed
// We implemented lazy loading in the code below - only loads the data when is requested
sap.ui.define(["sns/basis/nav1/controller/BaseController", 
               "sap/ui/model/json/JSONModel"], 
		function (BaseController, JSONModel) {
	                "use strict";
	                var _aValidTabKeys = ["Info", "Projects", "Hobbies", "Notes"];
	                return BaseController.extend("sns.basis.nav1.controller.employee.Resume", {
	                	onInit: function() {
	                		// debugger;
	                		var oRouter=this.getRouter();
	                		this.getView().setModel(new JSONModel(), "view");
	                		oRouter.getRoute("employeeResume").attachMatched(this._onRouteMatched, this);
	                	},
	                	_onRouteMatched: function(oEvent) {
	                		debugger;
	                		var oArgs, oView, oQuery;
	                		oArgs=oEvent.getParameter("arguments");
	                		oView=this.getView();
	                		oView.bindElement({
	                			     path: "/Employees(" + oArgs.employeeId + ")",
	                			     events: {
	                			    	    change: this._onBindingChange.bind(this),
	                			    	    dataRequested: function(oEvent) {
	                			    	    	oView.setBusy(true);
	                			    	    },
	                			    	    dataReceived: function(oEvent) {
	                			    	    	oView.setBusy(false);
	                			    	    }
	                			     }
	                		});
	                		oQuery = oArgs["?query"];
	                		// debugger;
	                		if (oQuery && _aValidTabKeys.indexOf(oQuery.tab) > -1 ) {
	                			oView.getModel("view").setProperty("/selectedTabKey", oQuery.tab);
	                			// LAZY LOADING FOR TWO TABS
	                			if (oQuery.tab === "Hobbies" || oQuery.tab === "Notes") {
	                				this.getRouter().getTargets().display("resumeTab" + oQuery.tab);
	                			}
	                		} else {
	                			// debugger;
	                			this.getRouter().navTo("employeeResume", {
	                				employeeId: oArgs.employeeId,
	                				query: {
	                					tab: _aValidTabKeys[0]
	                				}
	                			}, true /*no history*/);
	                		}
	                	},
	                	_onBindingChange: function(oEvent) {
	                		// no data
	                		if (!this.getView().getBindingContext()) {
	                			this.getRouter().getTargets().display("notFound");
	                		}
	                	},
	                	onTabSelect: function(oEvent) {
	                		var oCtx = this.getView().getBindingContext();
	                		this.getRouter().navTo("employeeResume", {
	                			      employeeId: oCtx.getProperty("EmployeeID"),
	                			      query: {
	                			    	  tab: oEvent.getParameter("selectedKey")
	                			      }
	                		}, true /*without history*/);
	                	}
	                });
});