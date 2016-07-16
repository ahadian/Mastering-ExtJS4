/*
    This file is generated and updated by Sencha Cmd. You can edit this file as
    needed for your application, but these edits will have to be merged by
    Sencha Cmd when upgrading.
*/

Ext.application({
    name: 'Packt',

    init: function () {
        splashScreen = Ext.getBody().mask('Loading application', 'splashscreen');
        Ext.DomHelper.insertFirst(Ext.query('.x-mask-msg')[0], {
            cls: 'x-splash-icon'
        });
    },

    launch: function () {
        this.hideMaskAfterDelay();
        console.log('launch');
    },

    hideMaskAfterDelay: function () {
        var delatedTask = new Ext.util.DelayedTask(function () {
            Ext.getBody().unmask();
        });

        delatedTask.delay(2000);
    }



});
