sap.ui.define(["sns/basis/nav1/controller/BaseController"], function(BaseController) {
	            "use strict";
	            return BaseController.extend("sns.basis.nav1.controller.NotFound", {
	            	onInit: function() {
	            		debugger;
	            		var oRouter, oTarget;
	            		oRouter=this.getRouter();
	            		oTarget=oRouter.getTarget("notFound");
	            		oTarget.attachDisplay(function(oEvent) {
	            			this._oData = oEvent.getParameter("data");
	            		}, this);
	            	}, 
	            	
	            	onNavBack: function(oEvent) {
	            		debugger;
	            		var oHistory, sPreviousHash, oRouter;
	            		if (this._oData && this._oData.fromTarget) {
	            			this.getRouter().getTargets().display(this._oData.fromTarget);
	            			delete this._oData.fromTarget;
	            			return;
	            		}
	            		// call the parent onNavBack
	            		BaseController.prototype.onNavBack.apply(this, arguments);
	            	}
	            	
	            });
});