'use strict';

app.puntosver = kendo.observable({
    onShow: function() {},
    afterShow: function() {}
});

// START_CUSTOM_CODE_puntosver
// Add custom code here. For more information about custom code, see http://docs.telerik.com/platform/screenbuilder/troubleshooting/how-to-keep-custom-code-changes

// END_CUSTOM_CODE_puntosver
(function(parent) {
    var puntosverModel = kendo.observable({
        fields: {
            pundocumento: '',
        },
        submit: function() {},
        cancel: function() {}
    });

    parent.set('puntosverModelpuntosvertosModel);
})(app.puntosver);

// START_CUSTOM_CODE_puntosverModel
// Add custom code here. For more information about custom code, see http://docs.telerik.com/platform/screenbuilder/troubleshooting/how-to-keep-custom-code-changes

// END_CUSTOM_CODE_puntosverModel