sap.ui.define(["sap/ui/core/UIComponent"], function(UIComponent) {
	"use strict";
	return UIComponent.extend("sns.basis.nav1.Component", {
		metadata: {
			manifest: "json"
		},
		
		init: function() {
			// call init from parent
			UIComponent.prototype.init.apply(this, arguments);
			
			// initialize router
			this.getRouter().initialize();
		}
	});
});
