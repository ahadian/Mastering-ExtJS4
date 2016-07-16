/*
    This file is generated and updated by Sencha Cmd. You can edit this file as
    needed for your application, but these edits will have to be merged by
    Sencha Cmd when upgrading.
*/

Ext.application({
    name: 'Packt',

    init: function () {
        this.splashScreen = Ext.getBody().mask('Loading application', 'splashscreen');
        Ext.DomHelper.insertFirst(Ext.query('.x-mask-msg')[0], {
            cls: 'x-splash-icon'
        });
    },

    launch: function () {
        this._hideMaskAfterDelay();
        console.log('launch');
    },

   _hideMaskAfterDelay: function () {
        var delatedTask = new Ext.util.DelayedTask(function () {
            this.splashScreen.next().fadeOut({
                duration: 1000,
                remove: true
            });

            this._launchApplication();
        },this);

        delatedTask.delay(2000);
    },

    _launchApplication:function(){
        console.log('launch application');
    }





});
